import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CreateEvent from './src/screens/Events/CreateEvent/CreateEvent';
import EventList from './src/screens/Events/EventList/EventList';
import Navbar from './src/components/Navbar/Navbar';
import React from 'react';

const Stack = createStackNavigator();

//primaryColor = #912180

export default function App() {
	const navigationRef = useNavigationContainerRef();

	return (
		<React.Fragment>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator initialRouteName="EventList">
					<Stack.Screen name="CreateEvent" component={CreateEvent} />
					<Stack.Screen name="EventList" component={EventList} />
				</Stack.Navigator>
				<Navbar navigation={navigationRef} />
			</NavigationContainer>
		</React.Fragment>
		// <View style={styles.container}>
		//   <Text>Open up App.js to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
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
