import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function CreateEvent() {
	return (
		<View style={styles.container}>
			<Text>Form create Event!!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
