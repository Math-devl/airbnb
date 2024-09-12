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
  const [describe, setDescribe] = useState("");
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
        setState={setEmail}
      />
      <Input
        placeholder="username"
        secure="false"
        state={username}
        setState={setUsername}
      />
      <LargeInput
        placeholder="Describe yourself in a few words..."
        state={describe}
        setState={setDescribe}
      />
      <Input
        placeholder="password"
        secure="true"
        state={password}
        setState={setPassword}
      />
      <Input
        placeholder="confirm password"
        secure="false"
        state={confirmPassword}
        setState={setConfirmPassword}
      />
      <Button name="signup" />
      <RedirectionButton text="Already have an account ? Login !" page="/" />
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
