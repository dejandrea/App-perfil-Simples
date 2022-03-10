import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Card from './componentes/Card';

import foto from './assets/img2.jpg'

export default function App(){

  function handleRedeSocial(redeSocial){
    switch (redeSocial) {
      case 'github':
          Alert.alert("Meu Github","https://github.com/dejandrea")
        break;
      case 'facebook':
          Alert.alert("Meu Facebook","link facebook")
        break;
      case 'instagram':
          Alert.alert("Meu Dio","https://web.dio.me/users/dejandrea?tab=achievements")
        break;
      case 'linkedin':
          Alert.alert("Meu Linkein","https://www.linkedin.com/in/andrea-de-j-s-frança-35866272/")
        break;
    }
  }

  return(
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={foto} style={styles.img} />
        <Text style={styles.nome}>Andréa França</Text>
        <Text style={styles.funcao}>Professora de Programação</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={()=>handleRedeSocial("github")}>
            <Icon name="github" size={30}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>handleRedeSocial("facebook")}>
            <Icon name="facebook" size={30} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>handleRedeSocial("instagram")}>
            <Icon name="instagram" size={30}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>handleRedeSocial("linkedin")}>
            <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
          
        </View>
      </View>
      
        <Card titulo="Formação Acadêmica">
          <Text style={styles.card_content_text}>Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.card_content_text}>Técnico em Informática</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={styles.card_content_text}>BYJU's Future School</Text>
          <Text style={styles.card_content_text}>Desbrabador Software</Text>
        </Card>
        <Card titulo="Conhecimentos">
          <Text style={styles.card_content_text}>JavaScript ES6 | React | React Native</Text>
          <Text style={styles.card_content_text}>HTML5 | CSS3</Text>
          <Text style={styles.card_content_text}>Python3</Text>
        </Card>
      
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:250,
    height:250,
    borderRadius:125,
    borderWidth:2
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  nome:{
    fontSize:26,
    fontWeight:'bold',
    marginTop:10

  },
  funcao:{
    color:"#939393",
    marginBottom:10
  },
  icons:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:'50%',
    marginTop:20
  },
  card_content_text:{
    color:'#939393'
  }
});