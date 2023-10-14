import { Avatar } from 'native-base';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIconst from 'react-native-vector-icons/MaterialIcons';

export default function Navbar({ navigation }) {
	const onPress = (name) => navigation.navigate(name);

	return (
		<View style={styles.container}>

			<IconMaterialIconst color={'#555'} name={'home'} size={30} light onPress={() => onPress('Home')} />
			
			<IconMaterialIconst color={'#555'} name={'search'} size={30} light onPress={() => onPress('Events')} />
			<IconMaterialIconst color={'#555'} name={'add'} size={30} light onPress={() => onPress('CreateEvent')} />
			<IconMaterialIconst color={'#555'} name={'person'} size={30} light onPress={() => onPress('Events')} />

			{/* <TouchableOpacity style={styles.button} onPress={() => onPress('Events')}>
				<Icon color={'#fff'} name={'plus'} size={30} light onPress={() => onPress('Events')} />
			</TouchableOpacity> */}

			{/* <TouchableOpacity style={styles.button} onPress={() => onPress('Events')}>
				<Icon name={'calendar'} size={30} light onPress={() => onPress('Events')}/>
			</TouchableOpacity> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: 90,
		padding: 20,
		paddingHorizontal: 40,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		backgroundColor: '#912180',
	}
});
