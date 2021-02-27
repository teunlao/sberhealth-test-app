import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import Form from '../../components/Form/Form';
import FormTextField from '../../components/FornTextField/FormTextField';
import { useData } from '../../DataContext/DataContext';
import StyledMainContainer from '../../components/styled/StyledMainContainer';
import FormButton from '../../components/FormButton/FormButton';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Поле имя не должно содержать чисел')
    .required('Поле имя является обязательным для заполнения'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Поле фамилия не должно содержать чисел')
    .required('Поле фамилия является обязательным для заполнения'),
});

const StepOne: React.FC = () => {
  const { setValues, data } = useData();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log(123);
    history.push('./step2');
    setValues(data);
  };

  return (
    <StyledMainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          label="Email"
          error={!!errors.firstName}
          errorMessage={errors?.firstName?.message}
          name="firstName"
          type="email"
          ref={register}
          required
        />
        <FormTextField
          label="Email"
          error={!!errors.lastName}
          errorMessage={errors?.lastName?.message}
          name="lastName"
          type="email"
          ref={register}
          required
        />
        <FormButton submit>Продолжить</FormButton>
      </Form>
    </StyledMainContainer>
  );
};

export default StepOne;
