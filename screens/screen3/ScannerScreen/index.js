import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";

import SlotList from "@/components/slot/SlotList";
import { getFlightDeals } from "@/requests/local/getSetFlights";

export function ScannerScreen({ navigation }) {
  const [slot, setSlot] = useState([]);

  useEffect(() => {
    async function startFetch() {
      const resFlightDeals = await getFlightDeals();
      setSlot(resFlightDeals);
    }
    startFetch();
  }, []);

  return (
    <>
      {slot.length === 0 && (
        <Text style={{ padding: 20 }}>
          Нет загруженных мест для сканирования
        </Text>
      )}
      {slot.length > 0 && (
        <View style={styles.container}>
          <View style={styles.wrapperInput}>
            <TextInput
              style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                flex: 1,
                paddingVertical: 10,
              }}
              keyboardType="numeric"
              value={JSON.stringify(slot)}
              placeholder="Штрих-код"
            />
            <Button style={{ flex: 1 }} title="Добавить" />
          </View>
          <View style={{width: "100%"}}>
            <SlotList
              data={slot}
              setData={setSlot}
              navigation={navigation}
              save={() => {
                "сохарнить";
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  wrapperInput: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  containerSafe: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default ScannerScreen;
