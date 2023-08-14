import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import DownloadFlights from "@/screens/screen2/DownloadFlights";
const Screens = createNativeStackNavigator();

export function Stack2() {
  return (
    <Screens.Navigator>
      <Screens.Screen
        options={{ headerShown: false }}
        name="Scaner"
        component={DownloadFlights}
      />
    </Screens.Navigator>
  );
}

export default Stack2;
