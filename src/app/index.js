import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  GeneratorDetails,
  MotorDetails,
  SignInScreen,
  Signup,
} from "../pages";
import CustomDrawer from "../Components/Drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const AppView = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator> */}

      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            // marginLeft: -25,
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppView;
