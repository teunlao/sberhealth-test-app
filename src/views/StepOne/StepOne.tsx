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
import PrimaryButton from '../../components/styled/PrimaryButton';
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
    .test('phone', 'Поле телефон должно иметь корректный  формат', (value = '') =>
      isValidPhoneNumber(normalizePhoneNumber(value)),
    ),
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

  const onSubmit = (formData: any) => {
    console.log('formData', formData);
    setValues(formData);
    history.push('./step2');
  };

  return (
    <StyledMainContainer>
      <StyledStepHeader>Основные данные</StyledStepHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          label="Имя"
          errorMessage={errors?.firstName?.message}
          name="firstName"
          type="text"
          ref={register}
        />
        <FormTextField
          label="Фамилия"
          errorMessage={errors?.lastName?.message}
          name="lastName"
          type="text"
          ref={register}
        />
        <FormTextField
          label="Email"
          errorMessage={errors?.email?.message}
          name="email"
          type="email"
          ref={register}
        />
        <FormTextField
          label="Телефон"
          errorMessage={errors?.phone?.message}
          name="phone"
          type="tel"
          ref={register}
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        />
        <PrimaryButton type="submit">Продолжить</PrimaryButton>
      </Form>
    </StyledMainContainer>
  );
};

export default StepOne;
