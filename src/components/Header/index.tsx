import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import ProfileImage from "../../images/pp.jpeg";
import { Container, Avatar, OnlineStatus, RightSide, Button } from "./styles";
import colors from "../../styles/colors";
import { Image } from "react-native";

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <Image
          source={ProfileImage}
          resizeMode="contain"
          style={{ width: 32, height: 32, borderRadius: 16 }}
        />
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
