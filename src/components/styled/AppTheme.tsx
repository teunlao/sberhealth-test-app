import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#427dc1',
    primaryDarker: '#1c5899',
    error: '#bf1650',
    secondary: '#313135',
    primaryText: '#ffffff',
    secondaryText: '#c9d1d9',
    inputBackground: '#090d13',
    buttonBackground: '#21262D',
    background: '#0d1117',
  },
  sizes: {
    radius: '0.5rem',
  },
  fontFamily: 'Helvetica Neue, sans-serif',
};

const AppTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppTheme;
