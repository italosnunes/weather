import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #f0f7ff;
  padding: 20px;
`;

export const TitleApp = styled.Text`
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 56px;
  color: #0093d1;
`;

export const LogoContent = styled.View`
  position: relative;
`;

export const FooterContent = styled.View`
  position: absolute;
  top: 70%;
  left: 5%;
  width: 100%;
`;
export const CreatedBy = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14.63px;
  color: #6d6d6d;
`;

export const Name = styled.Text`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #6d6d6d;
  margin-top: 10px;
`;

export const ButtonShowWeather = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: 64px;
  background-color: #0093d1;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const ButtonShowWeatherText = styled.Text`
  color: #f0f7ff;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 16px;
`;
