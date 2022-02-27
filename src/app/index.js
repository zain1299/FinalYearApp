import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  GeneratorDetails,
  MotorDetails,
  SignInScreen,
  Signup,
  GraphDetails,
} from "../pages";
import CustomDrawer from "../Components/Drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const AppView = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: "#aa18ea",
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor: "#333",
            drawerLabelStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 15,
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />

          <Drawer.Screen
            name="GeneratorDetalis"
            component={GeneratorDetails}
            options={{
              drawerLabel: "Generator",
            }}
          />
          <Drawer.Screen
            name="MotorDetails"
            component={MotorDetails}
            options={{
              drawerLabel: "Motor",
            }}
          />

          <Drawer.Screen
            name="GraphDetails"
            component={GraphDetails}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null,
              drawerActiveBackgroundColor: null,
            }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={SignInScreen} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppView;
