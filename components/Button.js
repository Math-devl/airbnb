import { View, Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ text, submit }) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFBAC0",
    borderWidth: 2,
    borderRadius: 60,
  },
  text: {
    color: "rgb(174, 174, 174)",
    fontWeight: "500",
    fontSize: 18,
  },
});
