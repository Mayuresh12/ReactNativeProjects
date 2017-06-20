import React, {Component,PropTypes} from 'react'

import{

	View,
	Text,
	StyleSheet,
	Platform
}from 'react-native'

class Quote extends Component{
	render(){
		
		return(
				<View style={styles.quoteContainer}>
					<Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
					<Text style={styles.sourceText}> - {this.props.quoteSource}</Text>
				</View>

			);
	}
}
Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({

	quoteContainer:{
		flex: 1,
		justifyContent:'center',
	},
	quoteText:{
		fontFamily: (Platform.OS === 'ios')?
		'AvenirNext-Bold': 'Roboto',
		fontSize:20,
		color: '#000000',
		padding: 40,
		textAlign:'justify',
		marginVertical:30,    
		opacity: 1

	},
	sourceText:{
		fontFamily: (Platform.OS === 'ios')?
		'AvenirNext-Italic': 'Roboto',
		fontSize:20,
		color: '#000000',
		textAlign:'right',
		fontStyle: 'italic',
		padding: 30,

	},
})
export default Quote