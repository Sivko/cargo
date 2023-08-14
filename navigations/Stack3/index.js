import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import ScannerScreen from "@/screens/screen3/ScannerScreen";
import Slot from "@/screens/screen3/Slot";
const Screens = createNativeStackNavigator();

export function Stack3() {
  return (
    <Screens.Navigator>
      <Screens.Screen
        options={{ headerShown: false }}
        name="Scaner"
        component={ScannerScreen}
      />
      <Screens.Screen name="Место" component={Slot} />
    </Screens.Navigator>
  );
}

export default Stack3;
