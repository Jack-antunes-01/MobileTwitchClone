import React from "react";
import { Text } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import { ContentContainer, Card, CardText } from "./styles";
import colors from "../../styles/colors";

const Cards: React.FC = () => {
  return (
    <>
      <ContentContainer>
        <Card>
          <CardText>Music</CardText>
          <FontAwesome name="music" size={24} color={colors.white} />
        </Card>
        <Card>
          <CardText>Games</CardText>
          <Entypo name="game-controller" size={24} color={colors.white} />
        </Card>
      </ContentContainer>
      <ContentContainer>
        <Card>
          <CardText>E-sports</CardText>
          <FontAwesome name="trophy" size={24} color={colors.white} />
        </Card>
        <Card>
          <CardText>Real Life</CardText>
          <FontAwesome name="microphone" size={24} color={colors.white} />
        </Card>
      </ContentContainer>
    </>
  );
};

export default Cards;
