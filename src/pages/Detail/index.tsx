import React, {useEffect, useState, useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import api from '../../services/api';
import openWeatherMap from '../../services/openWeatherMap';
import {MapPin, Wind, Droplet, RefreshCcw} from 'react-native-feather';
import ToggleTheme from '../../components/ToggleTheme';
import {format} from 'date-fns';
import {ThemeContext} from '../../context/Theme';

import {
  Container,
  Header,
  LocationDescription,
  ImageContent,
  InformationContent,
  InformationDate,
  InformationTemperature,
  InformationTemperatureMinMaxContent,
  InformationTemperatureMinMax,
  InformationTemperatureDetail,
  InformationWindContent,
  InformationWindText,
  InformationWindDivisor,
  LocationContent,
  ActionContent,
  Rain,
} from './styles';

interface IOpenWeatherProps {
  place: string;
  icon: string;
  temp?: number;
  tempMin?: number;
  tempMax?: number;
  description?: string;
  windSpeed?: number;
  humidity?: number;
}

interface ILocation {
  lat: number;
  long: number;
}

const Detail: React.FC = () => {
  const [openWeather, setOpenWeather] = useState({
    place: '',
    icon: '',
  } as IOpenWeatherProps);
  const [locale, setLocale] = useState({} as ILocation);
  const {isDarkMode} = useContext(ThemeContext);
  const today = format(new Date(), "'Today,' d LLLL");
  async function showMyCurrentWeather(lat: number, long: number) {
    await api
      .get(
        `?lat=${lat}&lon=${long}&appid=${openWeatherMap.apiKey}&units=metric`,
      )
      .then(response => {
        const {name, weather, main, wind} = response.data;
        setOpenWeather({
          place: name,
          icon: weather[0].icon,
          temp: Math.round(main.temp),
          tempMin: Math.round(main.temp_min),
          tempMax: Math.round(main.temp_max),
          description: weather[0].description,
          windSpeed: Math.round(wind.speed),
          humidity: Math.round(main.humidity),
        });
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocale({lat, long});
        showMyCurrentWeather(lat, long);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const handleRefresh = () => {
    showMyCurrentWeather(locale.lat, locale.long);
  };

  // const ImageApi = () => {
  //   if (isDarkMode) {
  //     return 'https://openweathermap.org/img/wn/04n@2x.png';
  //   } else {
  //     return `https://openweathermap.org/img/wn/${openWeather.icon}@2x.png`;
  //   }
  // };

  return (
    <Container>
      <Rain source={require('../../assets/images/rain2.png')} />

      <Header>
        <ToggleTheme />
        <ActionContent>
          <TouchableOpacity onPress={handleRefresh}>
            <RefreshCcw stroke="#fff" width={24} height={24} />
          </TouchableOpacity>
        </ActionContent>
      </Header>
      <ImageContent>
        <LocationDescription>{openWeather.place}</LocationDescription>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: 'https://openweathermap.org/img/wn/04n@2x.png',
          }}
        />

        <InformationTemperatureMinMaxContent>
          <InformationTemperatureMinMax>
            Min: {openWeather.tempMin}º
          </InformationTemperatureMinMax>
          <InformationTemperatureMinMax>
            Max: {openWeather.tempMax}º
          </InformationTemperatureMinMax>
        </InformationTemperatureMinMaxContent>
      </ImageContent>
      <InformationContent>
        <InformationDate>{today}</InformationDate>
        <InformationTemperature>{openWeather.temp}</InformationTemperature>
        <InformationTemperatureDetail>
          {openWeather.description}
        </InformationTemperatureDetail>
        <InformationWindContent>
          <Wind stroke="#fff" width={20} height={20} />
          <InformationWindText>Wind</InformationWindText>
          <InformationWindDivisor>|</InformationWindDivisor>
          <InformationWindText>{openWeather.windSpeed}km/h</InformationWindText>
        </InformationWindContent>
        <InformationWindContent>
          <Droplet stroke="#fff" width={20} height={20} />
          <InformationWindText>Hum</InformationWindText>
          <InformationWindDivisor>|</InformationWindDivisor>
          <InformationWindText>{openWeather.humidity}%</InformationWindText>
        </InformationWindContent>
      </InformationContent>
    </Container>
  );
};

export default Detail;
