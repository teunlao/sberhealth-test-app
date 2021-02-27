import React from 'react';
import styled from 'styled-components';

interface FormButtonProps {
  submit: boolean;
}

const StyledButton = styled.button`
  background-color: #427dc1;
  color: white;
  border: none;
  border-radius: 0.3rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  transition: background-color 0.15s ease-out;

  :hover {
    background-color: #1c5899;
    cursor: pointer;
    transition: background-color 0.15s ease-in;
  }
`;

const FormButton: React.FC<FormButtonProps> = ({ submit, children }) => (
  <StyledButton type={submit ? 'submit' : 'button'}>{children}</StyledButton>
);

export default FormButton;
