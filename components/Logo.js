import { View, Image, StyleSheet } from "react-native";

export const Logo = () => {
  return (
    <View>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={styles.mainLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 100,
    width: 100,
  },
});
