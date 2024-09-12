import { StyleSheet, TextInput } from "react-native";

export const LargeInput = ({ placeholder, state, setState }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      multiline
      numberOfLines={10}
      maxLength={250}
      value={state}
      onChangeText={(text) => {
        setState(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    borderColor: "#FFBAC0",
    borderWidth: 2,
    width: "80%",
    height: 100,
  },
});
