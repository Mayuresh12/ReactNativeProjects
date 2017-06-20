import React, {Component, PropTypes} from 'react'
import{
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native'

class NextQuoteButton extends Component {
		render(){
			return (
					<TouchableOpacity style={styles.button} onPress = {this.props.onPress}>
						<Text style={styles.buttonText}> Next Though </Text>
					</TouchableOpacity>
				)
		}
}
NextQuoteButton.propTypes ={
	 onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	button:{
		borderWidth:2,
		borderColor:'#000000',
		padding: 10,
		marginBottom: 20,
	},
	buttonText:{
		color: '#000000',
		fontSize: 18,
	},
})

export default NextQuoteButton