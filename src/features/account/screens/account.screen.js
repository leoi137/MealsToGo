import React from "react";
import { Title } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

// Need navigation to get to other screens
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
