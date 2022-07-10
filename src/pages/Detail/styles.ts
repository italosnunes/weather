import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rain = styled.Image`
  position: absolute;
  left: -140px;
  top: -40px;
`;

export const LocationDescription = styled.Text`
  margin-left: 10px;
  font-size: 25;
  color: #fff;
  font-weight: bold;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  margin: 40px 0 20px 0;
`;

export const InformationContent = styled.View`
  min-height: 235px;
  border: solid 2px #d3d3d3;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
  align-items: center;
`;

export const InformationDate = styled.Text`
  color: #fff;
`;

export const InformationTemperature = styled.Text`
  color: #fff;
  font-size: 72px;
`;

export const InformationTemperatureMinMaxContent = styled.View`
  flex-direction: row;
`;
export const InformationTemperatureMinMax = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
`;

export const InformationTemperatureDetail = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const InformationWindContent = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 5px 80px;
`;

export const InformationWindText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin: 0 15px;
`;

export const InformationWindDivisor = styled.Text`
  color: #fff;
  font-size: 14px;
  margin: 0 5px;
`;

export const LocationContent = styled.View`
  flex-direction: row;
`;

export const ActionContent = styled.View``;
