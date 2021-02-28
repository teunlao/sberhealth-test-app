import React, { forwardRef } from 'react';
import StyledErrorMessage from '../styled/StyledErrorMessage';
import StyledInput from '../styled/StyledInput';
import StyledInputContainer from '../styled/StyledInputContainer';
import StyledLabel from '../styled/StyledLabel';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormTextField = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, type, placeholder, errorMessage, onChange }, ref) => (
    <StyledInputContainer className="FormInput">
      <StyledLabel htmlFor={`input_${name}`} isError={!!errorMessage}>
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
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

export default FormTextField;
