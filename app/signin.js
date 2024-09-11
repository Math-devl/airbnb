import { View, useWindowDimensions, StyleSheet, Platform } from "react-native";
import { useState } from "react";
import axios from "axios";

import { Logo, Input, Button, Title } from "../components/index";

export default function Signin() {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    /* console.log("submited"); // ok */
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      console.log(email);
      console.log(password);

      console.log(response.data);
      // setData ...
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Title title="Sign in" />
      <Input
        placeholder={"email"}
        state={email}
        setState={setEmail}
        secure={false}
      />
      <Input
        placeholder={"password"}
        state={password}
        setState={setPassword}
        secure={true}
      />
      <Button text="Sign in" submit={handleSubmit} />
    </View>
  );
}

const useStyles = () => {
  const { height, width } = useWindowDimensions;

  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  });
  return styles;
};
