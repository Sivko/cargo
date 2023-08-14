import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Button } from "react-native";

import uploadInvocesSlots from "@/requests/upload/uploadInvocesSlots";
// import AddInvoice from "../screens/AddInvoice";
// import AddInvoices from "../screens/AddInvoices";
// import Invoces from "../screens/Invoces";
// import Slot from "../screens/Slot";
import SlotIndex from "@/components/slot/SlotIndex";
import CreateScreen from "@/screens/screen1/CreateScreen";
import FirstScreen from "@/screens/screen1/FirstScreen";
import Invoices from "@/screens/screen1/Invoices";
const SettingsStack = createNativeStackNavigator();

export function Stack1() {
  return (
    <SettingsStack.Navigator>
      {/* <SettingsStack.Screen
        options={{ headerShown: false }}
        name="AddInvoices"
        component={AddInvoices}
      />
      <SettingsStack.Screen name="Оформить" component={AddInvoice} />
      <SettingsStack.Screen name="Место" component={Slot} />
      <SettingsStack.Screen
        name="Квитанции"
        component={Invoces}
        options={() => ({
          headerRight: () => (
            <Button
              title="Отправить"
              onPress={() => {
                alert(
                  "Сейчас я отправляю данные и заношку все это в Логи, статус пока не меняется, сегодня поправлю и будет добавлен лоэдер :), ",
                );
                uploadInvocesSlots();
              }}
            />
          ),
        })}
      /> */}
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="AddInvoices"
        component={FirstScreen}
      />
      <SettingsStack.Screen name="Оформить" component={CreateScreen} />
      <SettingsStack.Screen name="Место" component={SlotIndex} />
      <SettingsStack.Screen
        name="Квитанции"
        component={Invoices}
        options={() => ({
          headerRight: () => (
            <Button
              title="Отправить"
              onPress={() => {
                alert(
                  "Сейчас я отправляю данные и заношку все это в Логи, статус пока не меняется, сегодня поправлю и будет добавлен лоэдер :), ",
                );
                uploadInvocesSlots();
              }}
            />
          ),
        })}
      />
    </SettingsStack.Navigator>
  );
}

export default Stack1;
