import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DataProvider from './DataContext/DataContext';
import StepOne from './views/StepOne/StepOne';
import StepTwo from './views/StepTwo/StepTwo';

const StyledAppContainer = styled.div`
  background-color: #0D1117;
  color: #ffffff;
  font-family: Helvetica Neue, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App: React.FC = () => (
  <StyledAppContainer>
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={StepOne} />
          <Route exact path="/step2" component={StepTwo} />
        </Switch>
      </Router>
    </DataProvider>
  </StyledAppContainer>
);

export default App;
