import React from 'react';
import {ThemeContext} from '../../context/Theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {DarkTheme, LightTheme} from '../../themes';
import {Sun, Moon} from 'react-native-feather';

export const ToggleTheme: React.FC = () => {
  const {isDarkMode, toggleTheme} = React.useContext(ThemeContext);

  const changeIcon = () => {
    if (isDarkMode) {
      return <Moon stroke="white" width={20} height={20} />;
    } else {
      return <Sun stroke="yellow" fill="yellow" width={20} height={20} />;
    }
  };
  return (
    <ToggleSwitch
      isOn={isDarkMode}
      onColor={DarkTheme.backgroundColor}
      offColor={LightTheme.backgroundColor}
      size="large"
      onToggle={() => toggleTheme()}
      thumbOnStyle={{backgroundColor: DarkTheme.backgroundColor}}
      thumbOffStyle={{
        backgroundColor: LightTheme.backgroundColor,
      }}
      icon={changeIcon()}
    />
  );
};

export default ToggleTheme;
