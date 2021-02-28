import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.radius};
  padding: 0.25rem 0.75rem;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  font-family: ${({ theme }) => theme.fontFamily};
  transition: background-color 0.15s ease-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    cursor: pointer;
    transition: background-color 0.15s ease-in;
  }
  :focus {
    outline: none;
    opacity: 0.9;
    transition: opacity 0.15s ease;
  }
  :disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export { Loader };
export default PrimaryButton;
