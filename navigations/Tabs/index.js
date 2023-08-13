import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Text, View } from "react-native";

// import AddInvoicesStack from "./AddInvoicesStack";
// import OptionStack from "./OptionStack";
// import ScanScreens from "./ScanStack";
// import DownloadFlights from "../screens/DownloadFlights";
import Stack1 from "@/navigations/Stack1";
const Tab = createBottomTabNavigator();

function OptionStack() {
  return (
    <View>
      <Text>Загрузить</Text>
    </View>
  );
}
function ScanScreens() {
  return (
    <View>
      <Text>Сканировать</Text>
    </View>
  );
}
function DownloadFlights() {
  return (
    <View>
      <Text>Настройки</Text>
    </View>
  );
}
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Принять места":
              return <AntDesign name="dropbox" size={size} color={color} />;
            case "Зарузить рейсы":
              return <Entypo name="grid" size={size} color={color} />;
            case "Сканировать рейсы":
              return <AntDesign name="barcode" size={size} color={color} />;
            case "Настройки":
              return <Ionicons name="options" size={size} color={color} />;
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#207aff",
      })}
    >
      <Tab.Screen name="Принять места" component={Stack1} />
      <Tab.Screen name="Зарузить рейсы" component={DownloadFlights} />
      <Tab.Screen name="Сканировать рейсы" component={ScanScreens} />
      <Tab.Screen name="Настройки" component={OptionStack} />
    </Tab.Navigator>
  );
}
