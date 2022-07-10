import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider as ThemeProviderStyledComponents} from 'styled-components';
import {useTheme} from '../../hooks';
import {IThemeContext} from './types/theme.interface';
import {DarkTheme, LightTheme} from '../../themes';

const initialState: IThemeContext = {
  isDarkMode: false,
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(initialState);

const ThemeProvider: React.FC = ({children}) => {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? DarkTheme.backgroundColor : LightTheme.backgroundColor
        }
      />

      <ThemeProviderStyledComponents
        theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
