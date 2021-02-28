import React from 'react';
import styled from 'styled-components';

type FormProps = React.HTMLProps<HTMLFormElement>;

const StyledForm = styled.form`
  width: 100%;
`;

const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit} noValidate>
    {children}
  </StyledForm>
);

export default Form;
