import { Text, StyleSheet, Pressable } from "react-native";

export const Button = ({ name, onPressFunc }) => {
  return (
    <Pressable style={styles.button} onPress={onPressFunc}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F9575C",
    borderWidth: 2,
    borderRadius: 50,
  },
  text: { color: "#717171", fontWeight: "bold", fontSize: 18 },
});
