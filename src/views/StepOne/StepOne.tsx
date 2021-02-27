import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import parsePhoneNumberFromString, { isValidPhoneNumber, AsYouType } from 'libphonenumber-js';
import Form from '../../components/Form/Form';
import FormTextField from '../../components/FornTextField/FormTextField';
import { useData } from '../../DataContext/DataContext';
import StyledMainContainer from '../../components/styled/StyledMainContainer';
import FormButton from '../../components/FormButton/FormButton';
import StyledStepHeader from '../../components/styled/StyledStepHeader';

const normalizePhoneNumber = (value: string): string => {
  const phoneString = new AsYouType('RU').input(value);

  if (isValidPhoneNumber(phoneString, 'RU')) {
    const phoneNumber = parsePhoneNumberFromString(phoneString, 'RU');
    if (phoneNumber) {
      return phoneNumber.formatInternational();
    }
  }

  return phoneString;
};

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
    .test('Card Test', 'Поле телефон должно иметь корректный  формат', (value = '') => {
      const phoneString = normalizePhoneNumber(value);
      console.log(phoneString);
      return isValidPhoneNumber(phoneString);
    }),
});

const StepOne: React.FC = () => {
  const { setValues, data } = useData();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log(123);
    history.push('./step2');
    setValues(data);
  };

  return (
    <StyledMainContainer>
      <StyledStepHeader>Основные данные</StyledStepHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          label="Имя"
          error={!!errors.firstName}
          errorMessage={errors?.firstName?.message}
          name="firstName"
          type="text"
          ref={register}
          required
        />
        <FormTextField
          label="Фамилия"
          error={!!errors.lastName}
          errorMessage={errors?.lastName?.message}
          name="lastName"
          type="text"
          ref={register}
          required
        />
        <FormTextField
          label="Email"
          error={!!errors.email}
          errorMessage={errors?.email?.message}
          name="email"
          type="email"
          ref={register}
          required
        />
        <FormTextField
          label="Телефон"
          error={!!errors.phone}
          errorMessage={errors?.phone?.message}
          name="phone"
          type="tel"
          ref={register}
          required
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        />
        <FormButton submit>Продолжить</FormButton>
      </Form>
    </StyledMainContainer>
  );
};

export default StepOne;
