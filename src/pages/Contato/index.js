import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {styles} from '../../styles';

function showMessage(){
  alert(`"NAO PRECISA ENTRAR EM CONTATO NÓS VAMOS TE ENCONTRAR" - Bob Esponja Agiota
`)
}

export default function Contato() {
 return (
   
   <View>

      <Pressable onPress={ () => showMessage()} style={styles.msgContato}>
      <Text style={styles.botaoText}>Ponto de encontro</Text>
    </Pressable>
   </View>
  
  );
}
