import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Navbar({ navigation }) {


	const onPress = (name) => navigation.navigate(name)


	return (
		<View style={styles.container}>
				<Icon name={'calendar'} size={30} light onPress={() => onPress('Events')}/>
				<Icon name={'plus'} size={30} light onPress={() => onPress('Events')}/>
				<Icon name={'bars'} size={30} light onPress={() => onPress('Events')}/>

			{/* <TouchableOpacity style={styles.button} onPress={() => onPress('Events')}>
				<Icon name={'calendar'} size={30} light onPress={() => onPress('Events')}/>
			</TouchableOpacity> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		height: 100,
		padding: 25,
		paddingHorizontal: 40,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		borderRadius: 50,
		width: 50
	}
});
