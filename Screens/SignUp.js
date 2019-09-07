import React, { Component } from 'react';
import TextInputComp from '../Components/TextInputComp';
import Container from '../Components/Container/Container';
import FooterComp from '../Components/FooterComp';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import console = require('console');
export default class SignIn extends Component {
    static navigationOptions=({navigation}) => ({
      header:null
  
    })
    static defaultProps = {
      title: 'Default Header'
    }
  
    render() {
      console.log 
      return (
        <Container styles={css.container} >
        <View style={css.logoView}>
        <Image style={css.logo} 
        source={require('../assets/icons/TN.jpg')}/>
        </View>
        <View style ={css.buttonView}>
        <TextInputComp name="Name"></TextInputComp>
        <TextInputComp name="Email"></TextInputComp>
        <TextInputComp name="Password"></TextInputComp>
        </View>
        <View style={css.footerView}>
        <FooterComp name ="SIGNUP" onPress ={()=>this.props.navigation.navigate("SignIn")}>
        </FooterComp>

        </View>


      </Container>
        );
    }
  
  }

  const css = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'black'
    },
    logoView:{
        // backgroundColor:'green',
        flex:0.4,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        height:150,
        width:150,
    },
    buttonView:{
        flex:0.5,
        // backgroundColor:'yellow',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    footerView:{
        flex:0.2,
        // backgroundColor:'orange',
        justifyContent:'flex-end',
    }

})
  
  