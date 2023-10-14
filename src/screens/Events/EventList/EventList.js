import { Appearance, Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Events() {
	//const colors = useTheme().colors;

	return (
		<View style={{...styles.container}}>
			<Text>Open events screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
