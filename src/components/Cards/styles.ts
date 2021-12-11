import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import colors from "../../styles/colors";

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-right: 14px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${colors.purple_dark};
  flex-direction: row;
  width: 48%;
  justify-content: space-between;
  padding: 16px;
  border-radius: 6px;
`;

export const CardText = styled.Text`
  color: ${colors.white};
  font-family: roboto_700;
  font-size: 18px;
`;
