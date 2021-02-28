import styled from 'styled-components';

const StyledLabel = styled.label<{ isError?: boolean }>`
  font-weight: 200;
  margin-bottom: 0.5rem;
  color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.secondaryText)};
`;

export default StyledLabel
