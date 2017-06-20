'use strict'

var React = require ('react-native');

var{
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} = React;

var AwesomeAgeApp = React.createClass({

render(){
	return(
		<View style = {styles.container}>
			<Text style = {styles.heading}>
			Welcome to AwesomeAgeApp;
			</Text>
		</View>

		);
}

});

const styles = StyleSheet.create({

container :{
	backgroundColor: '#f5fcff',
	paddingTop: 40 ,
	padding: 10,
	alignItems: 'center',
	flex: 1,
},
heading: {
	fontSize: 24,
	textAlign:'center',
	margin: 10,
	color: '#0000CC',
} ,

});

module.exports =AwesomeAgeApp ;