import { FormControl, Input as InputNative, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export const GooglePlacesInput = ({
	placeholder,
	size = 'md',
	handleBlur,
	handleChange,
	isInvalid,
	errorMessage,
	keyboardType,
	label,
	value
}) => {
	const {
		colors
	} = useTheme();

	return (
		<FormControl isInvalid={isInvalid} style={styles.container}>
			{label && <FormControl.Label>{label}</FormControl.Label>}
			<GooglePlacesAutocomplete
				styles={{
					textInputContainer: {
						
					},
					textInput: {
						height: 35,
						backgroundColor: colors.muted[50],
						fontSize: 16,
						borderWidth: 1,
						borderColor: colors.warmGray[300],
					},
					predefinedPlacesDescription: {
						color: '#1faadb',
					},
				}}
				placeholder={placeholder}
				fetchDetails={true}
				onNotFound={() => console.log('no results')}
				onFail={error => console.log(error, 'error')}
				onPress={(data, details = null) => {
					const response = {
						location: details?.geometry?.location,
						description: data?.description
					}

					handleChange(response)
				}}
				query={{
					key: 'AIzaSyBepYCvhqgzWxjf1wTut7m3ZrhH7GT6EQY',
					language: 'es',
				}}

			/>

			{isInvalid &&
				errorMessage && (
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
						{errorMessage}
					</FormControl.ErrorMessage>
				)}
		</FormControl>
	);
};

const styles = StyleSheet.create({
	input: {
	},

});
