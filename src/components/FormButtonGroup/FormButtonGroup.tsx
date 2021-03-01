import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SecondaryButton from '../styled/SecondaryButton';
import StyledFormInputWrapper from '../styled/StyledFormInputWrapper';

const StyledFormButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  button:first-child {
    margin-right: -1rem;
  }
`;

export enum ReceivingTypes {
  DELIVERY = 'delivery',
  PICKUP = 'pickup',
}

interface FormButtonGroupProps {
  onChange: (value: ReceivingTypes) => void;
}

const FormButtonGroup: React.FC<FormButtonGroupProps> = ({ onChange }) => {
  const [receivingType, setReceivingType] = useState<ReceivingTypes>(ReceivingTypes.DELIVERY);
  const deliveryBtn = useRef<HTMLButtonElement>(null);
  const pickupBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    deliveryBtn?.current?.focus();
    onChange(receivingType);
  }, [receivingType]);

  return (
    <StyledFormInputWrapper>
      <StyledFormButtonGroup>
        <SecondaryButton
          ref={deliveryBtn}
          aria-label="Выбрать способ получения - доставку"
          onClick={() => setReceivingType(ReceivingTypes.DELIVERY)}
          type="button"
          active={receivingType === ReceivingTypes.DELIVERY}
        >
          Доставка
        </SecondaryButton>
        <SecondaryButton
          ref={pickupBtn}
          aria-label="Выбрать способ получения - самовывоз"
          onClick={() => setReceivingType(ReceivingTypes.PICKUP)}
          type="button"
          active={receivingType === ReceivingTypes.PICKUP}
        >
          Самовывоз
        </SecondaryButton>
      </StyledFormButtonGroup>
    </StyledFormInputWrapper>
  );
};

export default FormButtonGroup;
