import { StyleSheet, TextInput } from "react-native";

export const Input = ({ placeholder, secure, state, setState }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      secureTextEntry={secure}
      autoCapitalize="none"
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
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 2,
    width: "80%",
  },
});
