import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ( (this.state.numero1 === '') || (this.state.numero2 === '')){
      alert('É obrigatório digitar os dois numeros')
      return;
    }

    res = (this.state.numero1 / (this.state.numero2 * this.state.numero2)).toFixed(2)
    
    if(res < 18.5){
      this.setState({resultado: 'Abaixo do peso, seu Frango ' + res});
    }
    else if(res >= 18.5 && res <= 24.9 ){
      this.setState({resultado: 'Peso normal ' + res});
    }
    else if(res >= 25 && res <= 29.9 ){
      this.setState({resultado: 'Sobrepeso ' + res});
    }
    else if(res >= 30 && res <= 34.9 ){
      this.setState({resultado: 'Obesidade Grau I ' + res});
    }
    else if(res >= 35 && res <= 39.9 ){
      this.setState({resultado: 'Obesidade Grau II ' + res});
    }
    else if(res >= 40){
      this.setState({resultado: 'Obesidade Grau III, mano vai fazer uma dieta ' + res});
    }
    else{
      this.setState({resultado: 'Alguma coisa ta muito errada ' + res});
    }
  }


  render(){
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
      onChangeText={ (numero) => this.setState({numero1: numero}) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a altura"
      onChangeText={ (numero) => this.setState({numero2: numero}) }
      />

      <Button title="Verificar" onPress={this.calcular} />


      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
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


export default App;