import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { View, Button } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../../../components/typography/text.component";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CameraView = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const PictureContainer = styled.View`
  background-color: rgba(255, 255, 255, ${({ tint }) => (tint ? tint : "0")});
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  position: ${({ position }) => (position ? position : "absolute")};
  ${({ loc }) => loc && `${loc}: 0`};
`;

export const PicButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  width: 200px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgba(255, 255, 255, 0.67)"};
`;

export const CameraScreen = ({ navigation }) => {
  // Will allow camera to always reference the CameraView component
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  // async because we are waiting for it to occur
  const pic = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Check these and get a view instead of the final return
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No Access To Camera</Text>;
  }
  return (
    <CameraContainer>
      <CameraView
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
      <PictureContainer loc="bottom">
        <PicButton
          title="Picture"
          onPress={pic}
          mode="contained"
          color="#257"
        />
      </PictureContainer>
    </CameraContainer>
  );
};

// {/* <TouchableOpacity onPress={pic}>
// <CameraView
//   ref={(camera) => (cameraRef.current = camera)}
//   type={Camera.Constants.Type.front}
// />
// </TouchableOpacity> */}
