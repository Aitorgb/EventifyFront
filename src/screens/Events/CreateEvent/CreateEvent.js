import { Formik } from 'formik';
import { StyleSheet, TextInput, View } from 'react-native';
import { Input } from '../../../components/common/Input/Input';
import { TextArea } from '../../../components/common/TextArea/TextArea';
import { DateTimePicker } from '../../../components/common/Datepicker/Datepicker';
import { ScrollView } from 'native-base';
import { GooglePlacesInput } from '../../../components/common/GooglePlacesInput/GooglePlacesInput';
import { Button } from '../../../components/common/Button/Button';
import * as Yup from 'yup';


const createSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
	duration: Yup.number().required().min(1),
	location: Yup.object().required(),
	date: Yup.date().required()
  });


export default function CreateEvent() {

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					description: '',
					location: '',
					duration: '0',
					date: new Date()
				}}
				validationSchema={createSchema}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors }) => {
					return (
						<ScrollView style={styles.container}>

							<Input
								handleChange={handleChange('name')}
								handleBlur={handleBlur('name')}
								error={!!(touched.name && errors.name)}
								value={values.name}
								label="Name"
							/>
							<TextArea
								handleChange={handleChange('description')}
								handleBlur={handleBlur('description')}
								value={values.description}
								error={!!(touched.description && errors.description)}
								label="Description"
							/>
							<Input
								handleChange={handleChange('duration')}
								handleBlur={handleBlur('duration')}
								error={!!(touched.duration && errors.duration)}
								value={values.duration}
								label="Duration"
								keyboardType="number-pad"
							/>
							<GooglePlacesInput
								handleChange={(date, name) => setFieldValue('location', date)}
								error={!!(touched.location && errors.location)}
								value={values.location}
								label="Location"
							/>

							<DateTimePicker
								value={values.date}
								label='Date and hour'
								handleChange={(date, name) => setFieldValue('date', date)}
							/>
							<Button label='Create Event' size={'md'} onPress={handleSubmit} />
						</ScrollView>
					);
				}}
			</Formik>

		</>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		gap: 10
	},
	title: {
		backgroundColor: '#555'
	}
});
