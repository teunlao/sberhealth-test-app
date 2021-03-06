import React, { forwardRef } from 'react';
import StyledErrorMessage from '../styled/StyledErrorMessage';
import StyledFormInputWrapper from '../styled/StyledFormInputWrapper';
import StyledInput from '../styled/StyledInput';
import StyledInputContainer from '../styled/StyledInputContainer';
import StyledLabel from '../styled/StyledLabel';

const cities = ['Россия', 'США', 'Германия', 'Китай', 'Канада'];

interface FormDataListProps {
  label: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  ariaLabel?: string;
  onChange?: React.ChangeEventHandler<HTMLDataListElement | any>;
}

const FormDataList = forwardRef<HTMLInputElement, FormDataListProps>(
  ({ label, name, placeholder, ariaLabel, errorMessage, onChange }, ref) => (
    <StyledFormInputWrapper>
      <StyledInputContainer>
        <StyledLabel htmlFor={`input-${name}`} isError={!!errorMessage}>
          {label}
        </StyledLabel>
        <StyledInput
          list={`input_${name}`}
          aria-label={ariaLabel}
          id={`input-${name}`}
          name={name}
          placeholder={placeholder}
          ref={ref}
          isError={!!errorMessage}
          type="list"
          onChange={onChange}
        />
        <datalist id={`input_${name}`} onChange={onChange} placeholder={placeholder}>
          {cities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      </StyledInputContainer>
    </StyledFormInputWrapper>
  ),
);

export default FormDataList;
