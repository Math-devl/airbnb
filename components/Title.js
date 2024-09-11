import { View, StyleSheet, Text } from "react-native";

export const Title = ({ title }) => {
  return (
    <View style={styles.viewTitle}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "rgb(174, 174, 174)",
    fontWeight: "600",
    fontSize: 24,
  },
  viewTitle: {
    paddingBottom: 100,
  },
});
