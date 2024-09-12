import { Redirect } from "expo-router";

export default Index = () => {
  // Rediriger vers la page de connexion par défaut.
  // Possible de mettre un fond d'écran, une animation
  // Bouton pour cliquer et aller sur la page voulu
  return <Redirect href="/signin" />;
};
