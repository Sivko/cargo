import { useEffect } from "react";
import { Button, View } from "react-native";

import Login from "./components/Login";
import logginStore from "./stores/logginStore";

export default function App() {
  const { user, getStorage, unloggin } = logginStore();
  useEffect(() => {
    getStorage();
  }, []);

  return (
    <>
      {user?.id ? (
        <View>
          <Button title="Выйти" onPress={unloggin} />
        </View>
      ) : (
        <Login />
      )}
    </>
  );
}
