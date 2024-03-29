import { React, useState, useEffect } from "react";
import {
    Button,
    View,
    ScrollView,
    SafeAreaView,
    TextInput,
    Text,
    Image,
    Dimensions,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../../theme";

import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";


import { useIsFocused } from "@react-navigation/native";
export function EditarInformacoesPet({ route }) {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [focusComponent, setFocusComponent] = React.useState("");
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    const navigation = useNavigation()


    const [getToken, setToken] = useState();
    const [getUserId, setUserId] = useState();

    const refresh = useIsFocused();
    useEffect(() => {
        if (route.params) {
            const { token } = route.params;
            setToken(token);
            const { userId } = route.params;
            setUserId(userId);
        }
    }, [refresh])

    return (
        <View style={styles.container}>
            <NomeDaPagina nomePagina="Editar informaçoes do seu pet" />
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.fotoPet}>
                        <Image source={require('../../assets/pet-images/pet-3.jpg')} style={{ height: imageHeight, width: imageWidth }}></Image>
                    </View>
                    <View style={styles.blocoInterno}>
                        <Text style={styles.Text}>Nome do Pet</Text>
                        <TextInput
                            placeholder="Lucky"
                            onChangeText={onChangeText}
                            value={text}
                            style={
                                focusComponent === "name"
                                    ? {
                                        ...styles.bloco,
                                        ...{ borderColor: "#772583", borderWidth: 2 },
                                    }
                                    : styles.bloco
                            }
                            onFocus={() => {
                                setFocusComponent("name");
                            }}
                        />
                        <Text style={styles.Text}>Idade</Text>
                        <TextInput
                            placeholder="<1 ano"
                            onChangeText={onChangeNumber}
                            value={number}
                            style={
                                focusComponent === "idade"
                                    ? {
                                        ...styles.bloco,
                                        ...{ borderColor: "#772583", borderWidth: 2 },
                                    }
                                    : styles.bloco
                            }
                            onFocus={() => {
                                setFocusComponent("idade");
                            }}
                            keyboardType="numeric"
                        />
                        <Text style={styles.Text}>Raça</Text>
                        <TextInput
                            placeholder="Rottweiler"
                            onChangeText={onChangeText}
                            value={text}
                            style={
                                focusComponent === "raça"
                                    ? {
                                        ...styles.bloco,
                                        ...{ borderColor: "#772583", borderWidth: 2 },
                                    }
                                    : styles.bloco
                            }
                            onFocus={() => {
                                setFocusComponent("raça");
                            }}
                        />
                        <Text style={styles.Text}>Sexo</Text>
                        <TextInput
                            placeholder="Masculino"
                            onChangeText={onChangeText}
                            value={text}
                            style={
                                focusComponent === "sexo"
                                    ? {
                                        ...styles.bloco,
                                        ...{ borderColor: "#772583", borderWidth: 2 },
                                    }
                                    : styles.bloco
                            }
                            onFocus={() => {
                                setFocusComponent("sexo");
                            }}
                        />

                        <Button onPress={() => { navigation.navigate('PetsAnunciados') }}
                            title="Publicar"
                            color={THEME.COLORS.PRIMARY}
                        ></Button>



                    </View>
                </ScrollView>
            </SafeAreaView>

            <Footer
                homePress={() => navigation.navigate("Home", { userId: getUserId, token: getToken })}
                anuncioPress={() => navigation.navigate("AnuncioPet", { userId: getUserId, token: getToken })}
                chatPress={() => navigation.navigate("Conversations", { userId: getUserId, token: getToken })}
                perfilPress={() => navigation.navigate("Perfil", { userId: getUserId, token: getToken })}
            />
        </View>
    );
}
