import React,{PropTypes} from 'react'
import
{
	View,
	Text,
	StyleSheet,

} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const TabBarItem = (props) => (
	<view style={styles.container}>
		<Icon name ={props.icon} style={styles.icon} />
		<Text style={styles.label}> {props.label} </Text>
	</view> 
	)

TabBarItem.propTypes={
	label: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	selected: PropTypes.bool,
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
	},
	icon:{
		color:'#ffffff',
		fontSize: 32,
		paddingVertical:4,

	},
	label:{
		color:'#ffffff',
		paddingTop:5,
	},
	selectedLabel:{
		color:'#cc9766',
	},
})

export default TabBarItem