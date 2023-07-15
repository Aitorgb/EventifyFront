import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function CreateEvent() {
	return (
		<View style={styles.container}>
			<Text>Open home!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
