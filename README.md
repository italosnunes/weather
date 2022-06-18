# weather :cloud_with_rain:

Weather is a study-level app that displays the weather forecast based on your location.

Android emulator was used during development. For operation on IOS devices, some adjustments must be made.

For the splash screen used the lottie-react-native library.

To identify the location, it was necessary to add the android permission PERMISSIONS.ACCESS_FINE_LOCATION.

With permission granted, used the react-native-geolocation-service library to return my latitude and longitude.

Anyway, with the latitude and longitude used the openWeatherMap api and got the weather data from my location.

Good studies :stuck_out_tongue_closed_eyes:

###Getting Start :books:

###Install dependencies :art:

```
yarn
```

###Run metro bundle :play_or_pause_button:

```
yarn start
```

### Install app in emulator :iphone:

```
yarn android
```

### Libraries used

- styled-components
- react-native-geolocation-service
- lottie-react-native
- reactotron-react-native

### Api

- openWeatherMap
