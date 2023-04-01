import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


export default function App(){
const [numero1, setNumero1] = useState('')
const [numero2, setNumero2] = useState('')
const [resultado, setResultado] = useState('')


  function calcular(){
    if ( (numero1 === '') || (numero2 === '')){
      alert('É obrigatório digitar os dois numeros')
      return;
    }

    res = (numero1 / (numero2 * numero2)).toFixed(2)
    
    if(res < 18.5){
      setResultado(('Abaixo do peso, seu Frango ' + res))
    }
    else if(res >= 18.5 && res <= 24.9 ){
      setResultado(('Peso normal ' + res))
    }
    else if(res >= 25 && res <= 29.9 ){
      setResultado(('Sobrepeso ' + res))
    }
    else if(res >= 30 && res <= 34.9 ){
      setResultado(('Obesidade Grau I ' + res))
    }
    else if(res >= 35 && res <= 39.9 ){
      setResultado(('Obesidade Grau II ' + res))
    }
    else if(res >= 40){
      setResultado(('Obesidade Grau III, mano vai fazer uma dieta ' + res))
    }
    else{
      setResultado(('Alguma coisa ta muito errada ' + res))
    }
  }


  
    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Calculo IMC</Text>

      <Image
          source={{uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/14620305-icone-de-balanca-de-mercearia-estilo-de-estrutura-de-topicos-vetor.jpg'}}
          style={styles.imagem}
        />

      <TextInput
      style={styles.input}
      placeholder="Digite o peso"
      onChangeText={ (numero) => setNumero1((numero)) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a altura"
      onChangeText={ (numero) => setNumero2((numero)) }
      />

      <Button title="Verificar" onPress={calcular} />


      <Text style={styles.texto}> {resultado} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  titulo2:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }

})

