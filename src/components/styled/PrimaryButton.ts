import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.75rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  font-family: ${({ theme }) => theme.fontFamily};;
  transition: background-color 0.15s ease-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    cursor: pointer;
    transition: background-color 0.15s ease-in;
  }
  :focus {
    outline: none;
    opacity: 0.90;
    transition: opacity 0.15s ease;
  }
`;

export default PrimaryButton;
