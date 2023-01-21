import React,{useEffect,useState,useLayoutEffect,useCallback} from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Footer } from '../../components/Footer';
import {GiftedChat} from "react-native-gifted-chat";
import { NomeDaPagina } from '../../components/NomeDaPagina';

import { styles } from './styles';
import { collection,addDoc,orderBy,query,onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth,database } from '../../Firebase/firebase';
import { useNavigation } from "@react-navigation/native";

export function Chat(navigate) {
    const [messages,setMessages] = useState([]);
    const navigation = useNavigation()
    const onSignOut = () => {
        signOut(auth).catch(error => console.log(error));
    };
    useLayoutEffect(()=>{
        const collectionRef = collection(database,'chats');
        const q = query(collectionRef,ref => ref.orderBy('createdAt','desc'));

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot');
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt,
                    text: doc.data().text,
                    user: doc.data().user
                }))
            )
        });
        return () => unsubscribe;
    }, []);

    const onSend = useCallback((messages = [])=> {
        setMessages(previousMessages => GiftedChat.append(previousMessages,messages));

            const {_id,createdAt,text,user} = messages[0];
            addDoc(collection(database,'chats'),{
                _id,
                createdAt,
                text,
                user
            });            
    }, []);
    return (
        <GiftedChat
        messages={messages}
        onSend={messages=> onSend(messages)}
        user={{
            _id: user?.currentUser?.email
        }}
        />
    );
}