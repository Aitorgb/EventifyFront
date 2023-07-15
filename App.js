import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Events from './src/screens/Events/Events';
import Navbar from './src/components/Navbar/Navbar';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();

	return (
		<React.Fragment>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Events" component={Events} />
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
