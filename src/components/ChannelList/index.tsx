import React from "react";
import { FlatList, Text } from "react-native";

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from "./styles";

import Jackson from "../../images/pp.jpeg";
import Edilberto from "../../images/pp1.jpeg";
import Juliano from "../../images/pp2.jpeg";

const CHANNEL_DATA = [
  {
    imageSource: Edilberto,
    title: "Edilberto",
  },
  {
    imageSource: Jackson,
    title: "Jackson",
  },
  {
    imageSource: Juliano,
    title: "Juliano",
  },
];

const ChannelList: React.FC = () => {
  const ChannelItem = ({ item }: any) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={item.imageSource} />

        <Column>
          <Username>{item.title}</Username>
          <Info>{(Math.random() * 10).toFixed(0)} news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      {CHANNEL_DATA.map((item) => (
        <ChannelItem item={item} key={item.title} />
      ))}
    </List>
  );
};

export default ChannelList;
