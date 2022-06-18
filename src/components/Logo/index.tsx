import React from 'react';
import {Sun, Rain, RainSecond} from './styles';

const Logo: React.FC = () => {
  return (
    <>
      <Sun source={require('../../assets/images/sunny.png')} />
      <Rain source={require('../../assets/images/rain.png')} />
      <RainSecond source={require('../../assets/images/rain2.png')} />
    </>
  );
};

export default Logo;
