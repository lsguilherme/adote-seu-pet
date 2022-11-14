import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { Card, ListItem, Icon, Header } from 'react-native-elements'
import Footer from "../../components/Footer";

import { styles } from './styles';

export function Favoritos() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            leftComponent={{ icon: 'arrow-left', color: '#fff', iconStyle: { color: '#000000' } }}
            centerComponent={{ text: 'Favoritos', style: { color: '#000000' } }}
            containerStyle={{
              backgroundColor: '#F3F3F3',
            }}
          />

        </View>
        <View style={styles.cardContianer}>
          <Card
            containerStyle={{
              borderRadius: 10,
              width: "50%",
              padding: 0
            }}>
            <Card.Image source={require('../../assets/Cat-1.jpg')} containerStyle={{
              marginBottom:0
            }}/>
            <Card.Divider />
            <View style={styles.cardText}>
              <Card.Image source={require('../../assets/simbolo-feminino.jpg')} style={{width:20, height:20}}>
              </Card.Image>
              <Text style={styles.nomePet}>
                MatadorDeRatos69
              </Text>
              <Text h6>
                Suvaco da Cobra
              </Text>

            </View>
          </Card>
          <Card
            containerStyle={{
              borderRadius: 10,
              width: "50%",
              padding: 0
            }}>
            <Card.Image source={require('../../assets/Dog-1.jpg')} style={{
              width:200,
              height:200
            }} />
            <Card.Divider />
            <View style={styles.cardText}>
              <Text style={styles.nomePet}>
                MatadorDeRatos69
              </Text>
              <Text h6>
                Suvaco da Cobra
              </Text>
              </View>
          </Card>
          <Card style={styles.card}
            containerStyle={{
              borderRadius: 10,
              width: "50%"
            }}>
            <Card.Image source={require('../../assets/Dog-2.jpg')} containerStyle={{
              marginBottom:0
            }}>
            </Card.Image>
            <Card.Divider></Card.Divider>
            <Text style={{ marginBottom: 25 }}>
              Fetuccini
            </Text>
            <Text>
              Recife
            </Text>
          </Card>

        </View>

      </ScrollView>
      <Footer />
    </View >

  );
}