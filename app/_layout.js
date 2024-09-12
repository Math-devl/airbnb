import { Stack } from "expo-router";

export default rootLayout = () => {
  // pas besoin de header
  return <Stack screenOptions={{ headerShown: false }} />;
};
