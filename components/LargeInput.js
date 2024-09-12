import { StyleSheet, TextInput } from "react-native";

export const LargeInput = (placeholder, lines, length) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      multiline
      numberOfLines={lines}
      maxLength={length}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 2,
    width: "80%",
  },
});
