import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";

import SlotList from "@/components/slot/SlotList";
import constSlots from "@/requests/constSlots";
import { getFlightDeals } from "@/requests/local/getSetFlights";
import { fields } from "@/requests/config";

export function ScannerScreen({ navigation }) {
  const [slot, setSlot] = useState(constSlots());
  const [barcodeInput, setBarcodeInput] = useState("");
  // useEffect(() => {
  //   async function startFetch() {
  //     const resFlightDeals = await getFlightDeals();
  //     setSlot(resFlightDeals);
  //   }
  //   startFetch();
  // }, []);
  const inputToFocus = useRef(null);
  useEffect(() => {
    if (inputToFocus?.current) {
      inputToFocus.current.focus();
    }
  }, []);

  function searchSlot(input) {
    setBarcodeInput(input.trim());
    const find = slot.filter(
      (item) => item.data.attributes.name === input.trim(),
    );
    if (find.length === 1) {
      const elem = find[0];
      elem.data.attributes.customs[fields["scanTSD"]] = "Найдено";
      setSlot([elem, ...slot.filter((e) => e.data.id !== find[0].data.id)]);
      setBarcodeInput("");
    }
  }

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
              ref={inputToFocus}
              keyboardType="numeric"
              value={barcodeInput}
              onChangeText={searchSlot}
              placeholder="Штрих-код"
            />
            <Button style={{ flex: 1 }} title="Добавить" />
          </View>
          <View style={{ width: "100%" }}>
            <SlotList
              data={slot.filter((e) =>
                e.data.attributes.name.includes(barcodeInput),
              )}
              setData={setSlot}
              navigation={navigation}
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
    width: "100%",
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
