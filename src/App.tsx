import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DataProvider from './DataContext/DataContext';
import StepOne from './views/StepOne/StepOne';
import StepTwo from './views/StepTwo/StepTwo';
import AppTheme from './components/styled/AppTheme';

const StyledAppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const App: React.FC = () => (
  <AppTheme>
    <StyledAppContainer className="test">
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={StepOne} />
            <Route path="/step2" component={StepTwo} />
          </Switch>
        </Router>
      </DataProvider>
    </StyledAppContainer>
  </AppTheme>
);

export default App;
