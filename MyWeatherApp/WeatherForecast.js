import React, { Component } from 'react';
import {
  StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';



var WeatherForecast = React.createClass({


getInitialState: function() {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  };
},

	render() {
		return(

				<ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => 


			<View>
				<Text style={styles.labelText}>
					WeatherForecast : {this.props.main}
				</Text>
				<Text style={styles.labelText}>
					Pressure : {this.props.pressure}
				</Text>
				<Text style={styles.labelText}>
					Humidity : {this.props.humidity}
				</Text>
				<Text style={styles.labelText}>
					Description : {this.props.description}
				</Text>
			</View> } />
			)
							console.log(Pressure);

	}
});

var styles = StyleSheet.create({
  headerText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  labelText: {
    //flex: 1,
   // fontSize: 16,
    textAlign: 'center',
    color: '#000000'
  },
});

module.exports = WeatherForecast;