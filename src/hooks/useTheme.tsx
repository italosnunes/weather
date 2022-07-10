import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeStorage = '@Weather:theme';

  useEffect(() => {
    const defineCurrentTheme = async () => {
      const currentTheme = await AsyncStorage.getItem(themeStorage);
      if (!currentTheme) {
        return;
      }
      setIsDarkMode(await JSON.parse(currentTheme));
    };

    defineCurrentTheme();
  }, []);

  const toggleTheme = async () => {
    await AsyncStorage.setItem(themeStorage, JSON.stringify(!isDarkMode));
    setIsDarkMode(!isDarkMode);
  };

  return {isDarkMode, toggleTheme};
};

export default useTheme;
