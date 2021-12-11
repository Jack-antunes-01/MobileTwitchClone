import React from "react";
import { View, Dimensions, FlatList, Animated } from "react-native";

import CarouselItem from "../CarouselItem";

import { DotView } from "./styles";

const { width } = Dimensions.get("window");

type Props = {
  data: any[];
};

const Carousel = ({ data }: Props) => {
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key${index}`}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CarouselItem item={item} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />

        <DotView>
          {data.map((item, i) => {
            const opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={item.imageSource}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </DotView>
      </View>
    );
  }

  return null;
};

export default Carousel;
