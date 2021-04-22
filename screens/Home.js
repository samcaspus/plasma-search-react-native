import * as React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Blood from "./Blood";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Otp from "./Otp";
import ForgotPassword from "./ForgotPassword";

const Stack = createStackNavigator();

function Home() {
  const [signedIn, setSignIn] = useState(true);
  return (
    <>
      <Header />
      {!signedIn ? (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>
            <Stack.Screen name="Otp" component={Otp}></Stack.Screen>
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <BottomNav />
      )}
    </>
  );
}

export default Home;
