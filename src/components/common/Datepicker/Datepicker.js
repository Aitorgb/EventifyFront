import { FormControl, Input as InputNative, useTheme } from 'native-base';
import DateTimePickerNative from '@react-native-community/datetimepicker';
import { StyleSheet } from 'react-native';

export const DateTimePicker = ({
	name= 'date',
	handleChange,
	isInvalid,
	errorMessage,
	minimumDate = new Date(),
	label,
	value
}) => {
	return (
		<FormControl isInvalid={isInvalid} style={styles.container}>
			{label && <FormControl.Label>{label}</FormControl.Label>}
			<DateTimePickerNative
				value={value}
				minimumDate={minimumDate}
				display="spinner"
				minuteInterval={10}
				mode={'datetime'}
				onChange={(event, date) => handleChange(date, name)}
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
	input: {}
});
