import { Button as ButtonNative, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const Button = ({
	isLoading = false,
	label,
	size = '24',
	variant = 'solid',
	onPress,
	disabled,
}) => {
	const { colors } = useTheme();

	return (
			<ButtonNative
				style={{ ...styles.button }}
				variant={variant}
				isLoading={isLoading}
				onPress={onPress}
				size={size}
				disabled={disabled}
			>
				{label}
			</ButtonNative>
	);
};

const styles = StyleSheet.create({
	button: {
		fontWeight: 'bold',
		fontSize: 20,
	}
});
