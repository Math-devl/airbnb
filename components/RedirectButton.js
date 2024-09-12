import { Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export const RedirectionButton = ({ text, page }) => {
  return (
    <Pressable
      onPress={() => {
        router.navigate(page);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#717171",
  },
});
