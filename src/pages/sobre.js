import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {styles} from '../styles';

let img = 'https://pm1.aminoapps.com/7776/3bff17d95a3f8ef4377df840bd0be9e02127f849r1-1106-1118v2_00.jpg'

export default function Contato() {
 return (
   <ScrollView showsVerticalScrollIndicator={false}>
   <View>
      <Image
          style={styles.fotoSobre}
          source={{ uri: img }}
      />

      <Text style={styles.sobreText}>
        Bob Esponja é um entusiasta da tecnologia e um talentoso desenvolvedor de software que ganhou destaque no mundo da programação. Nascido na Fenda do Biquíni, Bob sempre demonstrou uma paixão por resolver problemas e criar soluções inovadoras desde cedo.
      </Text>

      <Text style={styles.sobreText}>
Após concluir seus estudos na Escola Siri Cascudo de Programação, Bob mergulhou de cabeça no mundo da tecnologia, adquirindo habilidades excepcionais em diversas linguagens de programação. Sua criatividade única e habilidade para pensar fora da caixa o destacaram como um talento promissor na indústria de desenvolvimento de software.
      </Text>

      <Text style={styles.sobreText}>
          A virada em sua carreira aconteceu quando Bob teve a brilhante ideia de criar uma aplicação de conversor de moedas, facilitando a vida dos habitantes da Fenda do Biquíni que frequentemente interagem com diferentes tipos de moeda.
      </Text>
   </View>
   </ScrollView>
  );
}
