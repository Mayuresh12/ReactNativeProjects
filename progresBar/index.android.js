import React, { Component} from 'react'
import { AppRegistry ,
       Text,
       View
       } from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name} </Text>
    );
  }
}

class progresBar extends Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Greeting name='Mayuresh '/>
        <Greeting name='Vijay '/>
        <Greeting name='RAo '/>
      </View>

    );
  }
}

AppRegistry.registerComponent('progresBar', ()=> progresBar);