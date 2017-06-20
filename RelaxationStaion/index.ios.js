import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator
} from 'react-native';

import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'
const { quotes } = require('./quotes.json')
class RelaxationStaion extends Component {

  constructor (props){
    super(props)
        this.state ={
          quoteIndex:1,
        }
        this._increamentQuoteIndex=this._increamentQuoteIndex.bind(this)
    }
    _increamentQuoteIndex(){
      let newIndex
      if (this.state.quoteIndex +1 === quotes.length)
      {
        newIndex = 0
      }
      else
      {
        newIndex = this.state.quoteIndex + 1
      }
      this.setState(
      {
        quoteIndex:newIndex,
        qId :newIndex,
      })
    }
  
  render() {
    console.log("index..");
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator
        initialRoute={{ title: 'StartScreen', index: 1}}
        renderScene={(route, navigator) => {
          switch (route.title){
            case 'StartScreen':
            return <StartScreen onStartHandler={()=>navigator.push({title :'QuoteScreen'})}/>
            case 'QuoteScreen':
            return<QuoteScreen 
              qId={this.state.quoteIndex}
              text={quote.text} 
              source={quote.source} 
              onNextQuotePress={this._increamentQuoteIndex}/>
          }

        }}
      />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  
});


AppRegistry.registerComponent('RelaxationStaion', () => RelaxationStaion);
