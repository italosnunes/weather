import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
const Splash: React.FC = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0093d1',
      }}>
      <LottieView
        style={{
          width: 150,
          height: 150,
        }}
        source={require('../../assets/splash/splash2.json')}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Splash;
