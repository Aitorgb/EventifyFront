import { FormControl, TextArea as TextAreaNative, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const TextArea = ({
	height = 20,
	placeholder,
	size = 'md',
	handleBlur,
	handleChange,
	error,
	errorMessage,
	label,
	value
}) => {
	const { colors } = useTheme();

	return (
		<FormControl>
			{label && <FormControl.Label>{label}</FormControl.Label>}
			<TextAreaNative
				style={{ ...styles.input, backgroundColor: colors.muted[50] }}
				variant="outline"
				h={height}
				onChangeText={handleChange}
				onBlur={handleBlur}
				isInvalid={error}
				value={value}
				size={size}
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
	input: {}
});
