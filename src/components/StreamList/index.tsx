import React from 'react';
import { Text } from 'react-native';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

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
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>jmnsingle</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com ReactJS, Back-end com NodeJS, Mobile com React-Native
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>FullStack Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
