import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Platform,
} from "react-native";

const Signup = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Page Signup</Text>
    </View>
  );
};

export default Signup;

const useStyles = () => {
  const { height, width } = useWindowDimensions;

  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return styles;
};
