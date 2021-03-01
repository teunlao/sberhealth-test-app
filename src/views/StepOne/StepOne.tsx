import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import Form from '../../components/Form/Form';
import FormTextField from '../../components/FornTextField/FormTextField';
import { FormSchema, useFormData } from '../../context/DataContext';
import StyledMainContainer from '../../components/styled/StyledMainContainer';
import PrimaryButton from '../../components/styled/PrimaryButton';
import StyledStepHeader from '../../components/styled/StyledStepHeader';
import schema, { createDefaultStepOneValues } from './schema';
import { normalizePhoneNumber } from './normilize-phone-number';

const StepOne: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<FormSchema>({
    defaultValues: createDefaultStepOneValues(formData),
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
    setFormData(data);
    history.push('./step2');
  };

  return (
    <StyledMainContainer>
      <StyledStepHeader>Основные данные</StyledStepHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          label="Имя"
          placeholder="Иван"
          ariaLabel="Поле ввода имени"
          errorMessage={errors?.firstName?.message}
          name="firstName"
          type="text"
          ref={register}
        />
        <FormTextField
          label="Фамилия"
          placeholder="Иванов"
          ariaLabel="Поле ввода фамилии"
          errorMessage={errors?.lastName?.message}
          name="lastName"
          type="text"
          ref={register}
        />
        <FormTextField
          label="Телефон"
          placeholder="+7 904 652 23 24"
          ariaLabel="Поле ввода номера телефона"
          errorMessage={errors?.phone?.message}
          name="phone"
          type="tel"
          ref={register}
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        />
        <FormTextField
          label="Email"
          placeholder="example@example.com"
          ariaLabel="Поле ввода электронной почты"
          errorMessage={errors?.email?.message}
          name="email"
          type="email"
          ref={register}
        />
        <PrimaryButton aria-label="Кнопка перехода на этап оформления доставки" type="submit">
          Продолжить
        </PrimaryButton>
      </Form>
    </StyledMainContainer>
  );
};

export default StepOne;
