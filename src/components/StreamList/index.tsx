import React from "react";
import { FlatList, Text } from "react-native";

import ChannelEmpire from "../../images/channel_empire.jpeg";
import ChannelHorizon from "../../images/channel_horizon.jpeg";
import ChannelMinecraft from "../../images/channel_minecraft.jpeg";
import ChannelSlither from "../../images/channel_slither.jpeg";
import ChannelSubway from "../../images/channel_subway.jpeg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const STREAM_DATA = [
  {
    imageSource: ChannelEmpire,
    title: "Good Game Empire",
    subTitle: "Lets play games!",
    type: "Games and People",
    tags: ["Portuguese", "Technology"],
  },
  {
    imageSource: ChannelHorizon,
    title: "Horizon Zero Dawn",
    subTitle: "Can we finish ?!",
    type: "Question",
    tags: ["People", "Games"],
  },
  {
    imageSource: ChannelMinecraft,
    title: "Minecraft",
    subTitle: "Lets play with me!",
    type: "Invite",
    tags: ["Portuguese", "Minecraft"],
  },
  {
    imageSource: ChannelSlither,
    title: "Slither.io",
    subTitle: "Lets slither.io!",
    type: "Hey, we'll win",
    tags: ["Strategy"],
  },
  {
    imageSource: ChannelSubway,
    title: "Subway Surfers",
    subTitle: "Lets play Subway!",
    type: "Games",
    tags: ["Platform", "3D"],
  },
];

const StreamList: React.FC = () => {
  const StreamItem = ({ item }: any) => (
    <StreamContainer>
      <StreamThumbnail source={item.imageSource} resizeMode="cover" />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>{item.title}</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            {item.subTitle}
          </StreamDescription>
          <StreamCategory numberOfLines={1}>{item.type}</StreamCategory>
        </StreamRow>

        <TagRow>
          {item.tags.map((el: string) => (
            <TagView key={el}>
              <TagText>{el}</TagText>
            </TagView>
          ))}
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      {STREAM_DATA.map((item) => (
        <StreamItem item={item} key={item.title} />
      ))}
    </List>
  );
};

export default StreamList;
