import styled from 'styled-components';

const SecondaryButton = styled.button<{ active: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  z-index: ${({ active }) => (active ? 2 : 1)};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 0.1rem solid;
  border-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.08rem;
  font-family: ${({ theme }) => theme.fontFamily};
  transition: border 0.15s ease-out;
  outline: none;
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: border 0.15s ease-in;
  }
`;

export default SecondaryButton;
