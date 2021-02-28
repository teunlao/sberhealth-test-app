import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const StyledButton = styled.button<{ active: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 0.1rem solid;
  border-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.08rem;
  font-family: ${({ theme }) => theme.fontFamily};
  transition: border 0.15s ease-out;
  z-index: ${({ active }) => (active ? 2 : 1)};
  outline: none;
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: border 0.15s ease-in;
  }
`;

interface FormButtonGroupProps {
  onChange: (value: ReceivingTypes) => void;
}

const FormButtonGroup: React.FC<FormButtonGroupProps> = ({ onChange }) => {
  const [receivingType, setReceivingType] = useState<ReceivingTypes>(ReceivingTypes.DELIVERY);
  const deliveryBtn = useRef<HTMLButtonElement>(null)
  const pickupBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    console.log(receivingType);
    deliveryBtn?.current?.focus()
    onChange(receivingType);
  }, [receivingType]);

  return (
    <StyledFormButtonGroup>
      <StyledButton
        ref={deliveryBtn}
        onClick={() => setReceivingType(ReceivingTypes.DELIVERY)}
        type="button"
        active={receivingType === ReceivingTypes.DELIVERY}
      >
        Доставка
      </StyledButton>
      <StyledButton
        ref={pickupBtn}
        onClick={() => setReceivingType(ReceivingTypes.PICKUP)}
        type="button"
        active={receivingType === ReceivingTypes.PICKUP}
      >
        Самовывоз
      </StyledButton>
    </StyledFormButtonGroup>
  );
};

export default FormButtonGroup;
