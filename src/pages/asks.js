import { styles } from  '../styles';
import {Text, TextInput, View, ScrollView, TouchableOpacity, Keyboard} from 'react-native';
import React, { useState, useEffect } from 'react'


export default function App(){
  const [newpergunta, setNewPergunta] = useState()
  const [input, setInput] = useState()


  useEffect( () => {
    const recuperarPergunta = async () => {
      const perguntaUsuario = await AsyncStorage.getItem('newpergunta')
      setNewPergunta(perguntaUsuario)    
    };

    recuperarPergunta();
  }, []);

  const gravaPergunta = async () => {
    setNewPergunta(input)
    await AsyncStorage.setItem('newpergunta', input);
    Keyboard.dismiss();
    alert('Salvo com sucesso!');
  }

return(
  
  <ScrollView>
    <View style={styles.box}>

      <Text style={styles.question}>O que é um aplicativo conversor de moedas?</Text>
      <Text style={styles.answ}>
        Um conversor de moeda é uma ferramenta que calcula o valor de uma quantia em uma moeda em relação a outra com base nas taxas de câmbio atuais.
      </Text>

      <Text style={styles.question}>Como são determinadas as taxas de câmbio?</Text>
      <Text style={styles.answ}>
        As taxas de câmbio são determinadas pelo mercado global e influenciadas por fatores como oferta/demanda, estabilidade econômica e eventos geopolíticos.
      </Text>

      <Text style={styles.question}>Existem taxas adicionais ao usar o conversor de moeda?</Text>
      <Text style={styles.answ}>
         Não, nosso aplicativo é gratuito no entanto, instituições financeiras podem ter taxas.
      </Text>

      <Text style={styles.question}>Posso personalizar a lista de moedas?</Text>
      <Text style={styles.answ}>
        Atualmente, a lista é predefinida, mas estamos considerando personalização futura.
      </Text>

      <Text style={styles.question}>É seguro fornecer informações financeiras no aplicativo?</Text>
      <Text style={styles.answ}>
        Não solicitamos nem armazenamos informações financeiras. Transações reais devem ser feitas em plataformas seguras.
      </Text>

      <Text style={styles.question}>O que fazer se encontrar um erro nas taxas de câmbio?</Text>
      <Text style={styles.answ}>
        Entre em contato conosco pela seção de Contato para correções rápidas.
      </Text>

      <Text style={styles.question}>Como são determinadas as taxas de câmbio?</Text>
      <Text style={styles.answ}>
        As taxas de câmbio são determinadas pelo mercado global e influenciadas por fatores como oferta/demanda, estabilidade econômica e eventos geopolíticos.
      </Text>

      <Text style={styles.question}>Existem taxas adicionais ao usar o conversor de moeda?</Text>
      <Text style={styles.answ}>
         Não, nosso aplicativo é gratuito no entanto, instituições financeiras podem ter taxas.
      </Text>

      <Text style={styles.question}>Posso personalizar a lista de moedas?</Text>
      <Text style={styles.answ}>
        Atualmente, a lista é predefinida, mas estamos considerando personalização futura.
      </Text>

      <Text style={styles.question}>É seguro fornecer informações financeiras no aplicativo?</Text>
      <Text style={styles.answ}>
        Não solicitamos nem armazenamos informações financeiras. Transações reais devem ser feitas em plataformas seguras.
      </Text>

      <Text style={styles.question}>O que fazer se encontrar um erro nas taxas de câmbio?</Text>
      <Text style={styles.answ}>
        Entre em contato conosco pela seção de Contato para correções rápidas.
      </Text>

      <Text style={styles.question}>Como são determinadas as taxas de câmbio?</Text>
      <Text style={styles.answ}>
        As taxas de câmbio são determinadas pelo mercado global e influenciadas por fatores como oferta/demanda, estabilidade econômica e eventos geopolíticos.
      </Text>

      <Text style={styles.question}>Existem taxas adicionais ao usar o conversor de moeda?</Text>
      <Text style={styles.answ}>
         Não, nosso aplicativo é gratuito no entanto, instituições financeiras podem ter taxas.
      </Text>

      <Text style={styles.question}>Posso personalizar a lista de moedas?</Text>
      <Text style={styles.answ}>
        Atualmente, a lista é predefinida, mas estamos considerando personalização futura.
      </Text>

      <Text style={styles.question}>É seguro fornecer informações financeiras no aplicativo?</Text>
      <Text style={styles.answ}>
        Não solicitamos nem armazenamos informações financeiras. Transações reais devem ser feitas em plataformas seguras.
      </Text>

      <Text style={styles.question}>O que fazer se encontrar um erro nas taxas de câmbio?</Text>
      <Text style={styles.answ}>
        Entre em contato conosco pela seção de Contato para correções rápidas.
      </Text>

      <Text style={styles.question}>Faça sua pergunta aqui </Text>

        <TextInput
        style={styles.escreverPergunta}
        value={input}
        onChangeText={(texto) => setInput(texto)}
        underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={gravaPergunta}>
          <Text style={styles.enviaPergunta}>Enviar pergunta</Text>
        </TouchableOpacity>

      <Text style={styles.newpergunta}>{newpergunta}</Text>

    </View>
  </ScrollView>
)}