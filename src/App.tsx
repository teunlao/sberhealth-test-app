import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DataProvider from './DataContext/DataContext';
import AppTheme from './components/styled/AppTheme';

const StepOne = lazy(() => import('./views/StepOne/StepOne'));
const StepTwo = lazy(() => import('./views/StepTwo/StepTwo'));

const StyledAppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => (
  <AppTheme>
    <StyledAppContainer className="test">
      <DataProvider>
        <Router>
          <Suspense fallback={<StyledLoader>Загрузка...</StyledLoader>}>
            <Switch>
              <Route exact path="/" component={StepOne} />
              <Route path="/step2" component={StepTwo} />
            </Switch>
          </Suspense>
        </Router>
      </DataProvider>
    </StyledAppContainer>
  </AppTheme>
);

export default App;
