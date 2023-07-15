import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Events() {
	return (
		<View style={styles.container}>
			<Text>Open events screen</Text>
			<StatusBar style="auto" />
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