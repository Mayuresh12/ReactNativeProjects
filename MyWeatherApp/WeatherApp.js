/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{
        AppRegistry,
        StyleSheet,
        Text,
        View,
        TextInput
      } from 'react-native';
var WeatherForecast = require('./WeatherForecast');
var WeatherApp = React.createClass ({

getInitialState(){
                  return{
                          zip:'',
                          forecast: null,
                        };
                  },
resetZipInput(){
  this.zipInput.setNativeProps({text: ''});
  this.setState({zip: ''});
  this.setState({forecast : null });
  },
_handleTextChange(event){
  var zip = event.nativeEvent.text;
  this.setState({zip: zip});
  fetch('http://api.openweathermap.org/data/2.5/forecast/city?q=' + zip + '&APPID=ab5be0b2c17edea82d851f27957da359')
      .then((response) => response.json())
      .then((responseJSON) => {
        for (var i = 0; i < responseJSON.list.length; i++) {
        //console.log(responseJSON.list[i].main.pressure);
                console.log('wind : '+ responseJSON.list[i].wind.speed + ' deg :' + responseJSON.list[i].wind.deg);
        console.log('Date'+ responseJSON.list[i].dt_txt);

        console.log('Weather ForeCast'+ responseJSON.list[i].weather[0].main);
        console.log('pressure' + responseJSON.list[i].main.pressure);
        console.log('humidity' + responseJSON.list[i].main.humidity);      
        console.log('Description' +responseJSON.list[i].weather[0].description);
        }
        this.setState({
          forecast:{
              main:responseJSON.list[0].weather[0].main,

          
              pressure:responseJSON.list[0].main.pressure,
              humidity:responseJSON.list[0].main.humidity,
              description:responseJSON.list[0].weather[0].description,
              icon:responseJSON.list[0].weather[0].icon,

          }

        });
      
      })
      .catch((error) => {
      console.error(error);
    });

},

  render() {
    var content = null;
    if(this.state.forecast != null){
      content= <WeatherForecast
        main={this.state.forecast.main}
        pressure={this.state.forecast.pressure}
        humidity={this.state.forecast.humidity}
        description={this.state.forecast.description}
        icon={this.state.forecast.icon}/>;


    }
    else{
      if (this.state.zip != ''){
        content = <Text style={styles.instructionText}>There was a problem with the zip you entered.Please try again</Text>;
      }
    }
    return (
      <View>
      <View style={styles.container}>
      <H1> My awesome WeatherApp  </H1>
        <Text style={styles.instructionText}>
        <Em>Enter a <Strong>Zip Code</Strong> to Retrieved WeatherForecast </Em>
        </Text>
        <TextInput
          ref={component => this.zipInput= component}
          style={styles.zipInput}
          returnKey='go'
          placeholder='please enter your city'
         // keyboardType='numeric'
          //autoFocus={true}
         // onFocus={this.resetZipInput}
          onSubmitEditing={this._handleTextChange}/>
      </View>
      {content}
      </View>
    );
  }
});

var H1 = React.createClass({
  render(){
    return(
      <Text style={styles.headerText}>
        {this.props.children}
      </Text>
      )
  }
})

var Strong = React.createClass({
  render(){
    return(
      <Text style={styles.bold}>
        {this.props.children}
      </Text>
      )
  }
})

var Em = React.createClass({
  render(){
    return(
      <Text style={styles.italic}>
        {this.props.children}
      </Text>
      )
  }
})
var styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  instructionText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#0000A0',
    fontSize: 20,
  },

  headerText:{
    fontWeight:'bold',
    fontSize:26,
    padding:5,
  },

  italic:{
    fontStyle: 'italic',


  },
  bold:{
    fontWeight: 'bold',


  },

  zipInput: {
      fontSize: 20,
      width: 275,
      borderWidth: 1,
      height: 40,
  }
});

module.exports = WeatherApp;


