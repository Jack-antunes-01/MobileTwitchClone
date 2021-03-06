import React from "react";
import { View, FlatList } from "react-native";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

import { Wrapper, Container, Main } from "./styles";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Fallowed Categories</Title>,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <StreamList />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <StreamList />,
      },
      {
        key: "OFFLINE_CHANELS",
        render: () => <Title>Offline Channel</Title>,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <ChannelList />,
      },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => item.render()}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            contentContainerStyle={{ paddingBottom: 140 }}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
