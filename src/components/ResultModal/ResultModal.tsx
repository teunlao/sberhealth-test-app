import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledModalContainer = styled.div<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(13, 17, 23, 0.5);
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.3s;
`;

const StyledModalContent = styled.div<{ active: boolean }>`
  max-width: 500px;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
  transition: 0.5s all;
`;

interface ResultModalProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ active, setActive, children }) => {
  useEffect(() => {}, []);

  return (
    <StyledModalContainer onClick={() => setActive(false)} active={active}>
      <StyledModalContent onClick={(event) => event.stopPropagation()} active={active}>
        {children}
      </StyledModalContent>
    </StyledModalContainer>
  );
};
export default ResultModal;
