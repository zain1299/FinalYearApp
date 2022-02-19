import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home, GeneratorDetails, MotorDetails } from "../pages";
import CustomDrawer from "../Components/Drawer";

const Drawer = createDrawerNavigator();

const AppView = () => {
  return (
    <NavigationContainer>
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
