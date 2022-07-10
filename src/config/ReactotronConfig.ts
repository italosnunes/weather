import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: Platform.OS === 'android' ? '10.0.2.2' : 'localhost',
    })
    .useReactNative()
    .connect();

  console.log('Reactotron Configured');
}
