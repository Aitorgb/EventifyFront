import { DarkTheme, DefaultTheme, NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Appearance, useColorScheme } from 'react-native';
import CreateEvent from './src/screens/Events/CreateEvent/CreateEvent';
import EventList from './src/screens/Events/EventList/EventList';
import Navbar from './src/components/Navbar/Navbar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config"

const Stack = createStackNavigator();

//primaryColor = #912180

export default function App() {
	const navigationRef = useNavigationContainerRef();
	const theme = useColorScheme();

	return (
		<React.Fragment>
			<GluestackUIProvider config={config}>
				<NavigationContainer ref={navigationRef} theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
					<NativeBaseProvider>
						<Stack.Navigator
							initialRouteName="Home"
							screenOptions={{
								headerMode: 'screen'
							}}
						>
							<Stack.Screen
								name="CreateEvent"
								component={CreateEvent}
								options={{
									title: 'Create Event'
								}}
							/>
							<Stack.Screen
								name="Home"
								options={{
									title: 'Home'
								}}
								component={EventList}
							/>
						</Stack.Navigator>
						<Navbar navigation={navigationRef} />
					</NativeBaseProvider>
				</NavigationContainer>
			</GluestackUIProvider>
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
