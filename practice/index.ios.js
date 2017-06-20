/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  NetInfo,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
var alertMessage = 'PLease check your connection';
export default class practice extends Component {
state = {
    isConnected: null,
  };
  
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

  render() {
    return (
      <View style={styles.container}>
 <Text>{this.state.isConnected ? Alert.alert(
                                    'Alert Title',
                                     alertMessage,
                              ) : Alert.alert(
                                    'Alert Title',
                                     alertMessage,
                              )}</Text>
<Image
          style={styles.stretch}
          source={require('./1.png')}
        />
        <TouchableHighlight style={styles.wrapper}
                      onPress={() => Alert.alert(
                                    'Alert Title',
                                     alertMessage,
                              )}>
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>

        </TouchableHighlight>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('practice', () => practice);
