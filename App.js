import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Text, View } from "react-native";

import Login from "./components/Login";
// import { getLogginController } from "./controllers/logginController";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <View>
          <Button
            title="Выйти"
            onPress={() => {
              setLoggedIn(false);
            }}
          />
        </View>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
