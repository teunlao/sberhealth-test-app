import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from '../../components/Form/Form';
import { useData } from '../../DataContext/DataContext';
import FormButtonGroup, { ReceivingTypes } from '../../components/FormButtonGroup/FormButtonGroup';
import StyledMainContainer from '../../components/styled/StyledMainContainer';
import StyledStepHeader from '../../components/styled/StyledStepHeader';
import FormTextArea from '../../components/FormTextArea/FormTextArea';
import FormDataList from '../../components/FormDataList/FormDataList';
import FormTextField from '../../components/FornTextField/FormTextField';
import PrimaryButton from '../../components/styled/PrimaryButton';
import StyledDivider from '../../components/styled/StyledDivider';
import SecondaryButton from '../../components/styled/SecondaryButton';

const StyledInputGroupRow = styled.div`
  display: flex;
  flex-direction: row;
  > div:not(:first-child) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    > div:not(:first-child) {
      margin-left: 0;
    }
  }
`;

const StyledFormActions = styled.div`
  display: flex;
  flex-direction: column;
  > button:first-child {
    margin-bottom: 1rem;
  }
`;

const onBackClickHandler = () => {
  console.log('HELLO');
}

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

const schema = yup.object().shape({
  country: yup
    .string()
    .max(255, 'Поле страна не должно содержать более 255 символов')
    .required('Поле страна является обязательным'),
  city: yup
    .string()
    .max(255, 'Поле город не должно содержать более 255 символов')
    .required('Поле город является обязательным'),
  index: yup
    .string()
    .max(255, 'Поле индекс не должно содержать более 255 символов')
    .required('Поле индекс является обязательным'),
  address: yup
    .string()
    .max(255, 'Поле адрес не должно содержать более 255 символов')
    .required('Поле адрес является обязательным'),
  date: yup.string().required('Поле дата доставки является обязательным'),
});

const StepTwo: React.FC = () => {
  const [receivingType, setReceivingType] = useState<ReceivingTypes>(ReceivingTypes.DELIVERY);

  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      country: data.country,
      city: data.city,
      index: data.index,
      address: data.address,
      date: data.date,
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <StyledMainContainer>
      <StyledStepHeader>Адрес доставки</StyledStepHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormButtonGroup onChange={(value) => setReceivingType(value)} />
        {receivingType === ReceivingTypes.DELIVERY && (
          <>
            <StyledInputGroupRow>
              <FormDataList
                label="Страна"
                errorMessage={errors?.country?.message}
                name="country"
                placeholder="Россия"
                ref={register}
              />
              <FormTextField
                label="Город"
                errorMessage={errors?.city?.message}
                placeholder="Москва"
                name="city"
                type="text"
                ref={register}
              />
              <FormTextField
                label="Индекс"
                errorMessage={errors?.index?.message}
                placeholder="398000"
                name="index"
                type="text"
                ref={register}
              />
            </StyledInputGroupRow>
            <FormTextField
              label="Адрес"
              placeholder="г. Москва, ул. Космонавтов, 14/5"
              errorMessage={errors?.address?.message}
              name="address"
              type="text"
              ref={register}
            />
            <FormTextField
              label="Дата доставки"
              placeholder="25/03/2021"
              errorMessage={errors?.date?.message}
              name="date"
              type="date"
              ref={register}
            />
          </>
        )}
        <FormTextArea
          label="Комментарий к заказу"
          placeholder="Ваш комментарий здесь..."
          name="comment"
          ref={register}
        />
        <StyledFormActions>
          <PrimaryButton type="submit">Оформить заказ</PrimaryButton>
          <StyledDivider>Или</StyledDivider>
          <SecondaryButton onClick={() => history.push('/')} type="button">
            Вернуться
          </SecondaryButton>
        </StyledFormActions>
      </Form>
    </StyledMainContainer>
  );
};

export default StepTwo;
