import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from '../styles.js';

export default function App() {
  const [quantia, setQuantia] = useState('');
  const [conversao, setConversao] = useState('BRL');
  const [serConvertido, setSerConvertido] = useState('USD');
  const [taxaConversao, settaxaConversao] = useState(null);
  const [quantiaConvertida, setquantiaConvertida] = useState(null);

  useEffect(() => {
    fetchtaxaConversao();
  }, [conversao, serConvertido]);

  const fetchtaxaConversao = async () => {
    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${conversao}`
      );
      const data = await response.json();
      const rate = data.rates[serConvertido];
      settaxaConversao(rate);
    } catch (error) {
      console.error('Erro na conversão da moeda:', error.message);
    }
  };

  const converterMoeda = () => {
    const result = quantia * taxaConversao;
    setquantiaConvertida(result.toFixed(2));
  };

  return (
    <View style={ styles.box}>
    
      <Text>Quantidade:</Text>
      <TextInput
        style={ styles.field }
        placeholder="Coloque aqui a quantidade"
        keyboardType="numeric"
        value={quantia}
        onChangeText={(text) => setQuantia(text)}
      />

      <Text>Moeda para converter:</Text>

      <Picker
        style = { styles.field }
        selectedValue={conversao}
        onValueChange={(itemValue) => setConversao(itemValue)}>
        <Picker.Item label="BRL" value="BRL" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="JPY" value="JPY" />
        <Picker.Item label="ARS" value="ARS" />
      </Picker>


      <Text>Moeda convertida:</Text>
      <Picker
        style = { styles.field }
        selectedValue={serConvertido}
        onValueChange={(itemValue) => setSerConvertido(itemValue)}
      >
        <Picker.Item label="BRL" value="BRL" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="JPY" value="JPY" />
        <Picker.Item label="ARS" value="ARS" />
      </Picker>

      <Pressable onPress={converterMoeda} style={styles.botao} >
      <Text style={ styles.botaoText}>Converter</Text>
      </Pressable>
      {taxaConversao && quantiaConvertida && (
        <Text style={ styles.convert }>
          {quantia} {conversao} = {quantiaConvertida} {serConvertido}
        </Text>

      
    
      )}
    </View>
  );
}