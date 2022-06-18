import React, {useEffect} from 'react';
import {Platform, PermissionsAndroid, BackHandler} from 'react-native';

import Logo from '../../components/Logo';
import {
  Container,
  CreatedBy,
  FooterContent,
  LogoContent,
  TitleApp,
  Name,
  ButtonShowWeather,
  ButtonShowWeatherText,
} from './styles';

const Home: React.FC = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  async function requestPermissions() {
    let hasLocationPermission = '';
    if (Platform.OS === 'android') {
      hasLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }

    if (hasLocationPermission === 'granted') {
      navigation.navigate('Detail');
    }
  }

  return (
    <Container>
      <TitleApp>Weather App</TitleApp>
      <LogoContent>
        <Logo />
      </LogoContent>
      <FooterContent>
        <CreatedBy>created by</CreatedBy>
        <Name>Italo Nunes</Name>
        <Name>Full Stack Developer</Name>
        <ButtonShowWeather onPress={() => requestPermissions()}>
          <ButtonShowWeatherText>Show my location</ButtonShowWeatherText>
        </ButtonShowWeather>
      </FooterContent>
    </Container>
  );
};

export default Home;
