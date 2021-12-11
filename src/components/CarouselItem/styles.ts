import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../../styles/colors";

const { width, height } = Dimensions.get("window");

export const LiveTouch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const LiveContainer = styled.View`
  margin-right: 14px;
  margin-top: 10%;
`;

export const LiveItem = styled.Image`
  width: ${width - 27}px;
  height: 200px;
`;

export const LiveText = styled.Text`
  color: ${colors.white};
  font-family: roboto_500;
  font-size: 14px;
`;

export const LiveTextBackground = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px;
  border-radius: 6px;
  background-color: ${colors.red};
`;

export const SpecText = styled.Text`
  color: ${colors.white};
  font-family: roboto_500;
  font-size: 14px;
`;

export const SpecTextBackground = styled.View`
  position: absolute;
  top: 168px;
  left: 8px;
  padding: 4px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const InfoContainer = styled.View`
  margin-top: 50px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const LiveInfo = styled.Text`
  color: ${colors.white};
  font-family: roboto_400;
  font-size: 15px;
`;

export const LiveInfoBold = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-size: 15px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Tag = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${colors.gray};
  margin-right: 10px;
  border-radius: 16px;
  padding: 4px;
`;

export const TagName = styled.Text`
  color: ${colors.white};
  font-family: roboto_500;
  font-size: 14px;
`;
