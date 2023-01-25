import { React, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
// import { navigation, ro } from '@react-navigation/native';

export function Footer({ homePress, anuncioPress, chatPress, perfilPress }) {




    return (
        <View transparent={true} style={styles.container}>

            <View style={styles.linha}></View>

            <View style={styles.icones}>

                <TouchableOpacity onPress={homePress} style={styles.blocoIcones}>
                    <Image source={require('../../assets/IconInicio.png')} />
                    <Text style={styles.texto}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={anuncioPress} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconAnunciar.png')} />
                    <Text style={styles.texto}>Anunciar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={chatPress} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConversas.png')} />
                    <Text style={styles.texto}>Conversas</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={perfilPress} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConta.png')} />
                    <Text style={styles.texto}>Conta</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}