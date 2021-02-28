import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  min-height: 1rem;
`;

export default StyledErrorMessage;
