import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form/Form';
import { FormSchema, useFormData } from '../../context/DataContext';
import FormButtonGroup, { ReceivingTypes } from '../../components/FormButtonGroup/FormButtonGroup';
import StyledMainContainer from '../../components/styled/StyledMainContainer';
import StyledStepHeader from '../../components/styled/StyledStepHeader';
import FormTextArea from '../../components/FormTextArea/FormTextArea';
import PrimaryButton, { Loader } from '../../components/styled/PrimaryButton';
import StyledDivider from '../../components/styled/StyledDivider';
import SecondaryButton from '../../components/styled/SecondaryButton';
import FormDataList from '../../components/FormDataList/FormDataList';
import FormTextField from '../../components/FornTextField/FormTextField';
import ResultModal from '../../components/ResultModal/ResultModal';
import schema, { createDefaultStepTwoValues } from './schema';
import api from '../../api/index';

const StyledModalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondaryText};
  div {
    margin-top: 0.5rem;
  }
`;

const StyledInputGroupRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  > div:not(:first-child) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 800px) {
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

const StepTwo: React.FC = () => {
  const [resultModalIsActive, setResultModalActive] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData, setFormData } = useFormData();
  const history = useHistory();

  const { register, handleSubmit, errors, control, watch } = useForm<FormSchema>({
    defaultValues: createDefaultStepTwoValues({}),
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const isDelivery = watch('isDelivery');

  const onSubmit = (data: FormSchema) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      (async () => {
        try {
          setIsSubmitted(false);
          setIsLoading(true);
          const { success } = await api.sendFormData(formData);
          if (success) {
            setTimeout(() => {
              window.location.replace('/');
            }, 5000);
          }
          setIsSuccess(success);
        } catch (error) {
          setIsSuccess(false);
        } finally {
          setIsLoading(false);
          setResultModalActive(true);
        }
      })();
    }

    if (!isDelivery) {
      setFormData(createDefaultStepTwoValues({}));
    }
  }, [isDelivery, isSubmitted]);

  const backToPrevStepHandler = () => {
    setFormData(createDefaultStepTwoValues({}));
    history.push('/');
  };

  return (
    <StyledMainContainer>
      <ResultModal active={resultModalIsActive} setActive={(value) => setResultModalActive(value)}>
        {isSuccess && (
          <StyledModalText>
            <img alt="success" src="https://img.icons8.com/color/96/000000/checkmark--v1.png" />
            <span>Заказ успешно отправлен</span>
          </StyledModalText>
        )}
        {!isSuccess && (
          <StyledModalText>
            <img alt="failure" src="https://img.icons8.com/emoji/96/000000/cross-mark-emoji.png" />
            <div>Произошла ошибка</div>
            <div>Пожалуйста попробуйте позже</div>
          </StyledModalText>
        )}
      </ResultModal>
      <StyledStepHeader>Адрес доставки</StyledStepHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="isDelivery"
          control={control}
          render={({ onChange }) => (
            <FormButtonGroup onChange={(value) => onChange(value === ReceivingTypes.DELIVERY)} />
          )}
        />
        {isDelivery && (
          <>
            <StyledInputGroupRow>
              <FormDataList
                label="Страна"
                errorMessage={errors?.country?.message}
                name="country"
                placeholder="Россия"
                ariaLabel="Поле ввода страны с авто-дополнением"
                ref={register}
              />
              <FormTextField
                label="Город"
                errorMessage={errors?.city?.message}
                placeholder="Москва"
                name="city"
                ariaLabel="Поле ввода города"
                type="text"
                ref={register}
              />
              <FormTextField
                label="Индекс"
                errorMessage={errors?.index?.message}
                placeholder="398000"
                name="index"
                ariaLabel="Поле ввода индекса"
                type="text"
                ref={register}
              />
            </StyledInputGroupRow>
            <FormTextField
              label="Адрес"
              placeholder="г. Москва, ул. Космонавтов, 14/5"
              errorMessage={errors?.address?.message}
              name="address"
              ariaLabel="Поле ввода адреса доставки"
              type="text"
              ref={register}
            />
            <FormTextField
              label="Дата доставки"
              placeholder="25/03/2021"
              errorMessage={errors?.date?.message}
              name="date"
              ariaLabel="Поле ввода даты доставки"
              type="date"
              ref={register}
            />
          </>
        )}

        <FormTextArea
          label="Комментарий к заказу"
          name="comment"
          errorMessage={errors?.comment?.message}
          ariaLabel="Поле ввода дополнительных комментариев"
          placeholder="Ваш комментарий здесь..."
          ref={register}
        />
        <StyledFormActions>
          <PrimaryButton type="submit" disabled={isLoading} aria-label="Кнопка оформления заказа">
            {isLoading ? (
              <Loader type="Puff" color="#ffffff" height={24} width={24} />
            ) : (
              <div>Оформить заказ</div>
            )}
          </PrimaryButton>
          <StyledDivider>Или</StyledDivider>
          <SecondaryButton
            onClick={backToPrevStepHandler}
            type="reset"
            aria-label="Вернуться на основной этап формы"
          >
            Вернуться
          </SecondaryButton>
        </StyledFormActions>
      </Form>
    </StyledMainContainer>
  );
};

export default StepTwo;
