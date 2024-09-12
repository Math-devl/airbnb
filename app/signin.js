import { View, Text, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

import {
  Logo,
  Title,
  Input,
  Button,
  RedirectionButton,
} from "../components/index";
import { useState } from "react";

export default Signin = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        { email: email, password: password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.mainView}>
        <Logo />
        <Title title="Signin" />
        <Input
          placeholder="email"
          secure="false"
          state={email}
          useState={setEmail}
        />
        <Input
          placeholder="password"
          secure="true"
          state={password}
          setState={setPassword}
        />
        <Button name="Signin" onPressFunc={handleSubmit} />
        <RedirectionButton text="No account ? Register" page={"/signup"} />
      </View>
    </KeyboardAwareScrollView>
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
