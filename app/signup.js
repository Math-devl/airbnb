import { View, Text, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { StackRouter } from "@react-navigation/native";
import { useState } from "react";
import {
  Logo,
  Title,
  Input,
  Button,
  RedirectionButton,
  LargeInput,
} from "../components";

export default Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.mainView}>
      <Logo />
      <Title title="Signup" />
      <Input
        placeholder="email"
        secure="false"
        state={email}
        useState={setEmail}
      />
      <Input
        placeholder="username"
        secure="false"
        state={username}
        useState={setUsername}
      />
      {/*       <LargeInput
        placeholder="Describe yourself in a few words..."
        lines="5"
        length="100"
      /> */}
      <Input
        placeholder="password"
        secure="true"
        state={password}
        useState={setPassword}
      />
      <Input
        placeholder="username"
        secure="false"
        state={confirmPassword}
        useState={setConfirmPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
