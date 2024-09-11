import { View, TextInput, StyleSheet } from "react-native";

export const Input = ({ placeholder, setState, state, secure }) => {
  return (
    <View style={styles.viewInput}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChange={(text) => {
          setState(text);
        }}
        value={state}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 2,
    width: 250,
    fontSize: 16,
  },
  viewInput: {
    paddingBottom: 20,
  },
});
