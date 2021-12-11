import React from "react";
import { Text } from "react-native";
import Header from "../../components/Header";
import LiveValorant from "../../images/live_valorant.jpeg";
import LiveFortnite from "../../images/live_fortnite.jpeg";
import LiveArcane from "../../images/live_arcane.jpeg";

import {
  Wrapper,
  Title,
  CategoriesText,
  Container,
  CategoriesTitle,
  Row,
  Left,
} from "./styles";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards";
import CategoryList from "../../components/CategoryList";
import colors from "../../styles/colors";

const LIVE_ITEMS = [
  {
    twitchName: "Edilbets",
    gameName: "Fortnite",
    tags: ["Epic Games", "Portuguese"],
    imageSource: LiveFortnite,
  },
  {
    twitchName: "Jack",
    gameName: "Valorant",
    tags: ["Portuguese", "Riot Games", "Champions"],
    imageSource: LiveValorant,
  },
  {
    twitchName: "Juliano",
    gameName: "Arcane",
    tags: ["Riot games", "Top 10", "Portuguese"],
    imageSource: LiveArcane,
  },
];

const Discover: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <Header />
      </Left>
      <Container>
        <Title>Discover</Title>

        <Carousel data={LIVE_ITEMS} />

        <Cards />

        <Row>
          <CategoriesTitle>CATEGORIES </CategoriesTitle>
          <CategoriesText>WE THINK YOU'LL LIKE</CategoriesText>
        </Row>
        <CategoryList />
      </Container>
    </Wrapper>
  );
};

export default Discover;
