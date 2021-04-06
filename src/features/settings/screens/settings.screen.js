import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  // Tiggers whenever user changes and navigation effect
  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="caption">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <FadeInView>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
        </FadeInView>
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
