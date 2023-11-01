import { AspectRatio, Box, Button as ButtonNative, Center, Divider, HStack, Heading, Image, Stack, Text, VStack, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';
import IconMaterialEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialAntDesign from 'react-native-vector-icons/AntDesign';

export const Card = ({
	isLoading = false,
	label,
	size = '24',
	variant = 'solid',
	onPress,
	disabled,
}) => {
	const { colors } = useTheme();
	console.log('hola')
	return (
		<Box marginRight="5" marginTop="2" marginBottom="2" alignItems="center">
			<Box p="2" maxW="80" rounded="lg" overflow="hidden" _dark={{
				borderColor: "coolGray.600",
				backgroundColor: "gray.700"
			}} _web={{
				shadow: 2,
				borderWidth: 0
			}} _light={{
				backgroundColor: "gray.50"
			}}>
				<Box>
					<AspectRatio w="100%" ratio={16 / 9}>
						<Image borderRadius={6} source={{
							uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
						}} alt="image" />
					</AspectRatio>
				</Box>
				<Stack p="4" space={2}>
					<Stack>
						<Heading size="sm" ml="-1">
							Elena´s birthday
						</Heading>
					</Stack>
					<HStack alignItems="center" justifyContent="space-between">
						<HStack alignItems="center">
							<Text color="coolGray.600" _dark={{
								color: "warmGray.200"
							}} fontWeight="400">
								Free
							</Text>
						</HStack>
						<HStack alignItems="center">
							<Text color="coolGray.600" _dark={{
								color: "warmGray.200"
							}} fontWeight="400">
								8 people are going
							</Text>
						</HStack>
					</HStack>
					<Divider my="1" _light={{
						bg: "muted.300"
					}} _dark={{
						bg: "muted.50"
					}} />
					<VStack space={2}>
						<HStack alignItems="center">
							<IconMaterialEntypo color={'#555'} name={'location'} size={15} light />
							<Text ml="2" color="coolGray.600" _dark={{
								color: "warmGray.200"
							}} fontWeight="400">
								Calle Illescas / Madrid
							</Text>
						</HStack>
						<HStack alignItems="center">
							<IconMaterialAntDesign color={'#555'} name={'clockcircleo'} size={15} light />
							<Text ml="2" color="coolGray.600" _dark={{
								color: "warmGray.200"
							}} fontWeight="400">
								Sep, 26 / Tuesday, 16:00 PM
							</Text>
						</HStack>
					</VStack>
				</Stack>
			</Box>
		</Box>
	);
};

const styles = StyleSheet.create({
	button: {
		fontWeight: 'bold',
		fontSize: 20,
	}
});
