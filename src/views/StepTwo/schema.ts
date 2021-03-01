import * as yup from 'yup';
import { FormSchema } from '../../context/DataContext';

export const createDefaultStepTwoValues = (data: FormSchema | Record<string, string>): Record<string & boolean, string> => ({
  country: data.country || '',
  city: data.city || '',
  index: data.index || '',
  address: data.address || '',
  date: data.date || '',
  comment: data.comment || '',
  isDelivery: data.isDelivery || true,
});

const schema = yup.object().shape({
  country: yup.string().when('isDelivery', {
    is: true,
    then: yup.string().required('Поле страна является обязательным'),
  }),
  city: yup.string().when('isDelivery', {
    is: true,
    then: yup
      .string()
      .required('Поле город является обязательным')
      .max(255, 'Поле город не должно содержать более 255 символов'),
  }),
  index: yup.string().when('isDelivery', {
    is: true,
    then: yup
      .string()
      .required('Поле индекс является обязательным')
      .max(6, 'Поле индекс не должно содержать более 6 символов'),
  }),
  address: yup.string().when('isDelivery', {
    is: true,
    then: yup
      .string()
      .required('Поле адрес является обязательным')
      .max(255, 'Поле адрес не должно содержать более 255 символов'),
  }),
  date: yup.string().when('isDelivery', {
    is: true,
    then: yup.string().required('Поле дата доставки является обязательным'),
  }),
  comment: yup.string(),
});

export default schema;
