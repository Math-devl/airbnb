import { Platform, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import { useWindowDimensions } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  // On stocke dans une variable l'objet retourné par la fonction `useStyle`
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/signin">Signin</Link>
      <Link href="/signup">Signup</Link>
    </View>
  );
}

const useStyles = () => {
  const { height, width } = useWindowDimensions();

  // création de la feuille de styles
  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  // on retourne l'objet contenant le style
  return styles;
};
