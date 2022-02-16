import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Home } from "@screens/Home";
import { CarDetails } from "@screens/CarDetails";
import { Scheduling } from "@screens/Scheduling";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={"transparent"}
        />
        <Scheduling />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export { App };
