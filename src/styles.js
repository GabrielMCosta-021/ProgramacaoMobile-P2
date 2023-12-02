import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

//Comandos padrões

      box:{
        margin: 20
      },


//Pagina Home
      bob:{
        width: '100vw',
        height: '65vh',
        alignSelf: 'center',
        margin: 10
      },

      textHome:{
        alignSelf: 'center',
        fontSize: 15,
        margin: 10,
        fontWeight: 'bold',
      },

      botao:{
        padding: 10,
        width: '30vw',
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'green',
        alignSelf: 'center',
        borderRadius: 20,
      },

      botaoText:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
      },


// Pagina de Conversão de moeda

      field:{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          marginBottom: 10, 
          padding: 5,
          backgroundColor: 'rgba(d3,d3,d3, 0.5)'
      },
      
      convert:{
          alignSelf: 'center',
          marginTop: 10,
          fontSize: 25,
          fontWeight: 'bolder',
          
          color: 'black'
      },

//Pagina de Perguntas frequentes 

      question:{
        fontWeight: 'bold'
      },

      answ:{
        marginBottom: 10,
        fontWeight: 'medium'
      },

      escreverPergunta:{
        border: '1px solid black',
        padding: 5,
        margin: 5,
      },

      enviaPergunta:{
        margin: 5,
        padding: 5,
        width: '40vw',
        alignSelf: 'center',
        textAlign: 'center',
        borderStyle: 'solid',
        backgroundColor: 'rgba(80,80,80,0.2)'
      },

      newpergunta:{
        fontWeight: 'bold',
      },

// Page Sobre

      sobreText:{
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 10,
      },


      fotoSobre:{
        width: '40vw',
        height: '20vh',
        borderRadius: 80,
        alignSelf: 'center',
        margin: 10,
        border: '5px solid green'
      },

// Page Contato

      msgContato:{
        marginBottom: '50%',
        marginTop: '50%',
        padding: 10,
        width: '50vw',
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'green',
        alignSelf: 'center',
        borderRadius: 20,
      }



});

export {styles}