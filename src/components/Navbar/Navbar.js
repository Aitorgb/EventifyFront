import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Navbar({ navigation }) {
	const onPress = (name) => navigation.navigate(name);

	return (
		<View style={styles.container}>
			<Icon color={'#555'} name={'calendar-month-outline'} size={30} light onPress={() => onPress('Events')} />
			<TouchableOpacity style={styles.button} onPress={() => onPress('Events')}>
				<Icon color={'#fff'} name={'plus'} size={30} light onPress={() => onPress('Events')} />
			</TouchableOpacity>
			<Icon color={'#555'} name={'menu'} size={30} light onPress={() => onPress('Events')} />

			{/* <TouchableOpacity style={styles.button} onPress={() => onPress('Events')}>
				<Icon name={'calendar'} size={30} light onPress={() => onPress('Events')}/>
			</TouchableOpacity> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: 100,
		padding: 25,
		paddingHorizontal: 40,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#912180',
		padding: 10,
		borderRadius: 50,
		width: 50,
	}
});
