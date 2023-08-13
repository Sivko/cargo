import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

import Login from "./components/Login";
import FooterTabs from "./navigations/FooterTabs";
import logginStore from "./stores/logginStore";

export default function App() {
  const { user, getStorage } = logginStore();
  useEffect(() => {
    getStorage();
  }, []);

  return (
    <>
      {user?.id ? (
        <NavigationContainer>
          <FooterTabs />
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </>
  );
}
