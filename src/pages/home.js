import React from 'react';
import { Pressable, View, Text, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles';

export default function Home() {
  const navigation = useNavigation();
 return (
   <View>

    <Image style={styles.bob} 
      source={require('./images/bob.png')}
    />
    
    <Text style={styles.textHome}>Para fazer a conversão clique aqui</Text>
    
    <Pressable onPress={ () => navigation.navigate('Conversão')} style={styles.botao}>
      <Text style={styles.botaoText}>Conversão</Text>
    </Pressable>
  

  </View>
  );
}
