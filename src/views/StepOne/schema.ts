import * as yup from 'yup';
import { isValidPhoneNumber, normalizePhoneNumber } from './normilize-phone-number';
import { FormSchema } from '../../context/DataContext';

export const createDefaultStepOneValues = (data: FormSchema): Record<string, string> => ({
  firstName: data.firstName || '',
  lastName: data.lastName || '',
  email: data.email || '',
  phone: data.phone || '',
});

const schema = yup.object().shape({
  firstName: yup
    .string()
    .max(255, 'Поле имя не должно содержать более 255 символов')
    .required('Поле имя является обязательным'),
  lastName: yup
    .string()
    .max(255, 'Поле фамилия не должно содержать более 255 символов')
    .required('Поле фамилия является обязательным'),
  email: yup
    .string()
    .email('Email должен иметь корректный  формат')
    .required('Поле email является обязательным'),
  phone: yup
    .string()
    .required('Поле телефон является обязательным')
    .test('phone', 'Поле телефон должно иметь корректный  формат', (value = '') =>
      isValidPhoneNumber(normalizePhoneNumber(value)),
    ),
});

export default schema;
