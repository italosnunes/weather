import('./config/ReactotronConfig');
import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './routes';
import {ThemeProvider} from './context/Theme';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
