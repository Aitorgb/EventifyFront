import { FormControl, Input as InputNative, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';


export const Input = ({
	placeholder,
	size = 'md',
	handleBlur,
	handleChange,
	error,
	errorMessage,
    keyboardType,
	label,
	value
}) => {
    const {
        colors
      } = useTheme();
   
	return (
		<FormControl isInvalid={error} style={styles.container}>
			{label && <FormControl.Label>{label}</FormControl.Label>}
			<InputNative
                style={{...styles.input, backgroundColor: colors.muted[50]}}
				variant="outline"
				onChangeText={handleChange}
				onBlur={handleBlur}
				value={value}
				size={size}
                keyboardType={keyboardType}
				placeholder={placeholder}
			/>
			{error &&
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
