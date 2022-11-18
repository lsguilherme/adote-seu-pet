import React from 'react';
import { View, Image, Text, SafeAreaView, FlatList } from 'react-native';
import { Header } from 'react-native-elements'
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';

import { Footer } from "../../components/Footer";
import { useState } from 'react';

const pets = [
    {
        nome: 'Fox 1',
        foto: require('../../assets/pet-images/pet-1.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Jaboatão'
    },
    {
        nome: 'Fox 2',
        foto: require('../../assets/pet-images/pet-2.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Recife'
    },
    {
        nome: 'Fox 3',
        foto: require('../../assets/pet-images/pet-3.jpg'),
        icone: require('../../assets/pet-icons/pet-femea.png'),
        local: 'Boa Vista'
    },
    {
        nome: 'Fox 4',
        foto: require('../../assets/pet-images/pet-1.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Jaboatão'
    },
    {
        nome: 'Fox 5',
        foto: require('../../assets/pet-images/pet-2.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Recife'
    },
    {
        nome: 'Fox 6',
        foto: require('../../assets/pet-images/pet-3.jpg'),
        icone: require('../../assets/pet-icons/pet-femea.png'),
        local: 'Boa Vista'
    },
    {
        nome: 'Fox 7',
        foto: require('../../assets/pet-images/pet-1.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Jaboatão'
    },
    {
        nome: 'Fox 8',
        foto: require('../../assets/pet-images/pet-2.jpg'),
        icone: require('../../assets/pet-icons/pet-macho.png'),
        local: 'Recife'
    },
    {
        nome: 'Fox 9',
        foto: require('../../assets/pet-images/pet-3.jpg'),
        icone: require('../../assets/pet-icons/pet-femea.png'),
        local: 'Boa Vista'
    },

];

function PetCard({ item }) {

    return (
        <View style={styles.card.first} overflow='hidden'>
            <Image source={item.foto} />
            <Text style={styles.card.nome}>{item.nome}</Text>
            <View style={styles.card.conteudo.box}>
                <Text style={styles.card.conteudo.local}>
                    {item.local}
                </Text>
                <Image source={item.icone} />
            </View>
        </View>
    );
}

export function TodosOsPets() {
    const [search, onChangeSearch] = React.useState("");

    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.screen}>
                <SearchBar
                    placeholder="Pesquise um pet"
                    onChangeText={onChangeSearch}
                    value={search}
                    lightTheme={true}
                />
                <View>

                    <Header
                        leftComponent={{ icon: 'arrow-left', color: '#fff', iconStyle: { color: '#000000' } }}
                        centerComponent={{ text: 'Todos os pets por perto', style: { color: '#000000' } }}
                        containerStyle={{
                            backgroundColor: '#F3F3F3',
                        }}
                    />

                </View>
                <FlatList data={pets} renderItem={PetCard} keyExtractor={(item) => item.nome} numColumns={2} horizontal={false} />



                <Footer />

            </SafeAreaView>








        </View >

    );
}