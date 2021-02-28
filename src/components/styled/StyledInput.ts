import styled from 'styled-components';

const StyledInput = styled.input<{ isError?: boolean }>`
  display: block;
  width: 100%;
  border: 0.1rem solid;
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.secondary)};
  transition: border 0.2s ease-out;
  color: ${({ theme }) => theme.colors.secondaryText};
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  :focus {
    outline: none;
    border: 0.1rem solid;
    border-color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.primary)};
    transition: border 0.2s ease-out;
    width: 100%;
    height: 100%;
  }
`;

export default StyledInput
