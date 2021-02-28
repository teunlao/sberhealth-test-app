import styled from 'styled-components';

const StyledDivider = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.06rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  transition: border-bottom-color 0.5s ease;
  position: relative;
  margin: 10px auto 20px;
  overflow-x: hidden;

  :before {
    position: relative;
    margin-left: -50%;
    right: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 0.08rem;
    vertical-align: middle;
    width: 30%;
    display: inline-block;
    content: '';
  }
  :after {
    position: relative;
    margin-right: -50%;
    left: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 0.08rem;
    vertical-align: middle;
    width: 30%;
    display: inline-block;
    content: '';
  }
`;

export default StyledDivider;
