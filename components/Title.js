import { Text, StyleSheet } from "react-native";

export const Title = ({ title }) => {
  return <Text style={styles.mainTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  mainTitle: { color: "#717171", fontWeight: "bold", fontSize: 24 },
});
