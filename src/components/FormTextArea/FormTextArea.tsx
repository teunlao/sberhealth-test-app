import React, { forwardRef } from 'react';
import styled from 'styled-components';
import StyledInputContainer from '../styled/StyledInputContainer';
import StyledLabel from '../styled/StyledLabel';
import StyledErrorMessage from '../styled/StyledErrorMessage';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const StyledTextArea = styled.textarea<{ isError?: boolean }>`
  display: block;
  width: 100%;
  border: 0.1rem solid;
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.secondary)};
  transition: border 0.2s ease-out;
  height: 120px;
  color: ${({ theme }) => theme.colors.secondaryText};

  :focus {
    outline: none;
    border: 0.1rem solid;
    border-color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.primary)};
    transition: border 0.2s ease-out;
    width: 100%;
  }
`;

const FormTextArea = forwardRef<HTMLTextAreaElement, FormInputProps>(
  ({ label, name, type, placeholder, errorMessage, onChange }, ref) => (
    <StyledInputContainer className="FormInput">
      <StyledLabel htmlFor={`input_${name}`} isError={!!errorMessage}>
        {label}
      </StyledLabel>
      <StyledTextArea
        name={name}
        placeholder={placeholder}
        id={`input_${name}`}
        ref={ref}
        isError={!!errorMessage}
        onChange={onChange}
      />
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </StyledInputContainer>
  ),
);

export default FormTextArea;
