import React, { useCallback } from "react";
import { FlatList, Text } from "react-native";
import Cards from "../../components/Cards";
import CategoryList from "../../components/CategoryList";
import Header from "../../components/Header";

import LiveValorant from "../../images/live_valorant.jpeg";
import LiveFortnite from "../../images/live_fortnite.jpeg";
import LiveArcane from "../../images/live_arcane.jpeg";

import {
  Wrapper,
  Left,
  Container,
  Title,
  Tab,
  TabTitle,
  Touchable,
  CategoriesText,
} from "./styles";
import Carousel from "../../components/Carousel";
import { useFocusEffect } from "@react-navigation/core";
import StreamList from "../../components/StreamList";

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

const Browse: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState<number>(1);
  useFocusEffect(
    useCallback(() => {
      setSelectedTab(1);
    }, [])
  );

  return (
    <Wrapper>
      <Left>
        <Header />
      </Left>

      <Container>
        <Title>Search</Title>

        <Cards />

        {/* <Container horizontal={selectedTab === 1}> */}
        <Tab>
          <Touchable
            isSelected={selectedTab === 1}
            onPress={() => setSelectedTab(1)}
          >
            <TabTitle isSelected={selectedTab === 1}>Categories</TabTitle>
          </Touchable>
          <Touchable
            isSelected={selectedTab === 2}
            onPress={() => setSelectedTab(2)}
          >
            <TabTitle isSelected={selectedTab === 2}>
              Broadcast Channels
            </TabTitle>
          </Touchable>
        </Tab>

        {selectedTab === 1 && (
          <>
            <CategoriesText>MAIN CATEGORIES FOR MOBILE PHONES</CategoriesText>
            <CategoryList />
            <CategoriesText>ALL CATEGORIES</CategoriesText>
            <StreamList />
          </>
        )}

        {selectedTab === 2 && <Carousel data={LIVE_ITEMS} />}
      </Container>
    </Wrapper>
  );
};

export default Browse;
