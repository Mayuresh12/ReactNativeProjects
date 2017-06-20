import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state ={showText: true};
    // Toggle the state every second
    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
  }
  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return(
      <Text> {display}</Text>
      
    );
  }
}

class StateInReactNative extends Component{
  render(){
    return(
      <View>
        <Blink text='I love to Blink'/>
        <Blink text ='Yes blinking is so great'/>
        <Blink text = 'why they ever take out of HTML'/>
        <Blink text ='look at me look at mee' />
      </View>
    );
  }
}
AppRegistry.registerComponent ('StateInReactNative', () =>StateInReactNative);