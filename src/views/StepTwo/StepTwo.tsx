import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormTextField from '../../components/FornTextField/FormTextField';
import Form from '../../components/Form/Form';
import { useData } from '../../DataContext/DataContext';

const onSubmit = (data: any) => {
  console.log(data);
  const http = new XMLHttpRequest();
  const url = 'test.php';
  http.open('GET', url, true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send(data);

  http.onload = function () {
    console.log(this.responseText);
  };

  http.onreadystatechange = () => {
    console.log('http', http.response);
  };
};

const StepTwo: React.FC = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
    }
  });

  return (
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
      <input type="submit" />
    </Form>
  );
};

export default StepTwo;
