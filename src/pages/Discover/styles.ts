import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};
`;

export const Left = styled.View`
  padding-left: 14px;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 50,
  },
})`
  padding-left: 14px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 30px;

  margin-top: 20px;
`;

export const CategoriesTitle = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 15px;

  margin-top: 20px;
`;

export const CategoriesText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 15px;

  margin-top: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;


