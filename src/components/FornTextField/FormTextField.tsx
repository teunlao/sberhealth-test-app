import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
`;

const StyledLabel = styled.label<{ error?: boolean }>`
  font-weight: 200;
  padding-bottom: 0.5rem;
  color: ${({ error }) => (error ? '#bf1650' : '#c9d1d9')};
`;

const StyledInput = styled.input<{ error?: boolean }>`
  display: block;
  width: 100%;
  border: 0.1rem solid;
  box-shadow: 0 0 0.25rem #313135;
  border-radius: 0.3rem;
  padding: 0.6rem;
  margin-bottom: 0.7rem;
  background-color: #090d13;
  border-color: ${({ error }) => (error ? '#bf1650' : '#313135')};
  color: white;

  :focus {
    outline: none;
    border: 0.1rem solid #427dc1;
    box-shadow: 0 0 0.5rem #427dc1;
    width: 100%;
    height: 100%;
  }
`;

const StyledErrorMessage = styled.div`
  color: #bf1650;
  font-size: 0.8rem;
  min-height: 1rem;
`;

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  required: boolean;
  error: boolean;
  errorMessage?: string;
}

const FormTextField = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, type, required, error, errorMessage }, ref) => (
    <StyledTextField>
      <StyledLabel htmlFor={`input-${name}`} error={!!errorMessage}>{label}</StyledLabel>
      <StyledInput type={type} name={name} id={`input-${name}`} ref={ref} error={!!errorMessage} />
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </StyledTextField>
  ),
);

export default FormTextField;
