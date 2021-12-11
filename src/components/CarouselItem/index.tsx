import React from "react";

import {
  LiveTextBackground,
  LiveText,
  SpecTextBackground,
  SpecText,
  LiveContainer,
  LiveItem,
  InfoContainer,
  LiveInfo,
  Tag,
  TagName,
  TagContainer,
  LiveTouch,
  LiveInfoBold,
  Row,
} from "./styles";

type Props = {
  item: any;
};

const CarouselItem = ({ item }: Props) => {
  return (
    <LiveContainer>
      <LiveTouch>
        <LiveItem source={item.imageSource} />
      </LiveTouch>
      <LiveTextBackground>
        <LiveText>LIVE</LiveText>
      </LiveTextBackground>

      <SpecTextBackground>
        <SpecText>
          {(Math.random() * 10).toFixed(0)}m people watching now
        </SpecText>
      </SpecTextBackground>

      <InfoContainer>
        <Row>
          <LiveInfoBold>{item.twitchName} </LiveInfoBold>
          <LiveInfo>broadcasting</LiveInfo>
          <LiveInfoBold> {item.gameName}</LiveInfoBold>
        </Row>
        <TagContainer>
          {item.tags.map((el: string, index: string) => (
            <Tag key={index}>
              <TagName>{el}</TagName>
            </Tag>
          ))}
        </TagContainer>
      </InfoContainer>
    </LiveContainer>
  );
};
export default CarouselItem;
