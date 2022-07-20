import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
  height: Yup.number()
    .required('Required input field')
    .typeError('The form accepts only a numeric value')
    .negative('Enter a numeric value between 2 and 3 characters')
    .min(100, 'Enter your height from 100 cm')
    .max(250, 'Enter your height to 250 cm')
    .integer(),
  age: Yup.number()
    .required('Required input field')
    .typeError('The form accepts only a numeric value')
    .min(18, 'Enter your age from 18 years')
    .max(120, 'Enter your age to 120 years')
    .integer(),
  currentWeight: Yup.number()
    .required('Required input field')
    .typeError('The form accepts only a numeric value')
    .min(20, 'Enter your current weight from 20 kg')
    .max(500, 'Enter your current weight to 500 kg')
    .integer(),
  desiredWeight: Yup.number()
    .required('Required input field')
    .typeError('The form accepts only a numeric value')
    .min(20, 'Enter your desired weight from 20 kg')
    .max(500, 'Enter your desired weight to 500 kg')
    .integer(),
});
export default BasicFormSchema;
