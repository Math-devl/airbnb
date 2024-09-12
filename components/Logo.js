import { Image, StyleSheet, View } from "react-native";

import logo from "../assets/logo.png";

export const Logo = () => {
  return (
    <View>
      <Image source={logo} resizeMode="contain" style={styles.mainLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 150,
    width: 150,
  },
});
