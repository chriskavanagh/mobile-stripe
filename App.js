import "react-native-gesture-handler"; // must be at top
import Card from "./Card";
import { colors } from "./colors";
import HomeScreen from "./HomeScreen";
import React, { useState, useEffect } from "react";
import { fetchPublishableKey } from "./helpers";
import { StripeProvider } from "@stripe/stripe-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [publishableKey, setPublishableKey] = useState("");

  useEffect(() => {
    async function init() {
      const publishableKey = await fetchPublishableKey();
      if (publishableKey) {
        //console.log(`I am ${publishableKey}`);
        setPublishableKey(publishableKey);
      }
    }
    init();
  });
  return (
    <StripeProvider publishableKey={publishableKey}>
      <StatusBar
        backgroundColor={colors.blurple_dark}
        barStyle="light-content"
        translucent
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: colors.white,
            headerStyle: {
              shadowOpacity: 0,
              backgroundColor: colors.blurple,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: colors.slate,
            },
            headerTitleStyle: {
              color: colors.white,
            },
            headerBackTitleStyle: {
              color: colors.white,
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
