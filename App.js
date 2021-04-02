import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCjHPwbFrhGeCfkvL-OMCpF8wQPGp5iodk",
  authDomain: "mealstogo-7e993.firebaseapp.com",
  projectId: "mealstogo-7e993",
  storageBucket: "mealstogo-7e993.appspot.com",
  messagingSenderId: "92653771520",
  appId: "1:92653771520:web:1cd389b5cfdb831a91f1e5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // Making the different screens on their own
  // Wrapping the RestaurantsContextProvider over the entire app allows
  // for usage of its context
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// const [isAuthenticated, setIsAuthenticated] = useState(false);
// useEffect(() => {
//   setTimeout(() => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword("mo@binni.io", "test123")
//       .then((user) => {
//         // console.log(user);
//         setIsAuthenticated(true);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, 1000);
// }, []);
