import React, { forwardRef } from 'react';
import StyledErrorMessage from '../styled/StyledErrorMessage';
import StyledFormInputWrapper from '../styled/StyledFormInputWrapper';
import StyledInput from '../styled/StyledInput';
import StyledInputContainer from '../styled/StyledInputContainer';
import StyledLabel from '../styled/StyledLabel';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  ariaLabel?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormTextField = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, type, placeholder, ariaLabel, errorMessage, onChange }, ref) => (
    <StyledFormInputWrapper>
      <StyledInputContainer>
        <StyledLabel htmlFor={`input_${name}`} isError={!!errorMessage}>
          {label}
        </StyledLabel>
        <StyledInput
          type={type}
          name={name}
          aria-label={ariaLabel}
          placeholder={placeholder}
          id={`input_${name}`}
          ref={ref}
          isError={!!errorMessage}
          onChange={onChange}
        />
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      </StyledInputContainer>
    </StyledFormInputWrapper>
  ),
);

export default FormTextField;
