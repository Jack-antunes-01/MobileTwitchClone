import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions, Platform } from "react-native";
import colors from "../../styles/colors";

const { width } = Dimensions.get("window");

type TouchableProps = {
  isSelected: boolean;
};

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
    paddingBottom: 60,
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
  margin-bottom: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Tab = styled.View`
  flex-direction: row;
  margin-right: 14px;
`;

export const TabTitle = styled.Text<TouchableProps>`
  color: ${({ isSelected }) =>
    isSelected ? colors.purple_dark : colors.black};
  font-family: roboto_500;
  font-size: 15px;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<TouchableProps>`
  margin-right: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: ${colors.purple_dark};
  border-bottom-width: ${({ isSelected }) => (isSelected ? "3px" : "0px")};
`;
