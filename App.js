import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./screens/store";
import Inicio from "./screens/inicio";
import Peliculas from "./screens/peliculas";
import Series from "./screens/series";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Inicio"
            options={{ headerShown: false }}
            component={Inicio}
          />
          <Stack.Screen
            name="Peliculas"
            options={{ headerShown: false }}
            component={Peliculas}
          />
          <Stack.Screen
            name="Series"
            options={{ headerShown: false }}
            component={Series}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
