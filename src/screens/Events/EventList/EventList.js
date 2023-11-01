import { Appearance, Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../../components/common/Card/Card';
import { Heading, ScrollView, Stack } from 'native-base';

export default function Events() {
	//const colors = useTheme().colors;

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.container }}>
			<Stack marginY={3}>
				<Heading size="sm">
					My Events
				</Heading>
			</Stack>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
				{Array.apply(null, Array(5)).map((item, index) => (
					<Card key={index} />
				))}
			</ScrollView>
			<Stack marginY={3}>
				<Heading size="sm">
					Past Events
				</Heading>
			</Stack>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
				{Array.apply(null, Array(5)).map((item, index) => (
					<Card key={index} />
				))}
			</ScrollView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 15,
		padding: 20,
		paddingBottom: 80
	},
	eventContainer: {
		gap: 10,
		display: 'flex'
	}
});
