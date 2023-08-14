import moment from "moment";
import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import SlotList from "@/components/slot/SlotList";
import defaultInvoice from "@/requests/local/defaultInvoce";
import defaultSlot from "@/requests/local/defaultSlot";

function CreateScreen({ route, navigation }) {
  const { clientCode, countBox, numberTTN } = route.params;
  const [name, setName] = useState(
    `КВ от ${moment().format(
      "DD.MM.YYYY hh:mm",
    )}, ${clientCode}, ${countBox} кор.`,
  );
  // const [invoice, setInvoice] = useState({});
  const [slots, setSlots] = useState([defaultSlot]);
  // function hendlerSave() {
  //   invoice.data.attributes.name = name;
  //   invoice.data.attributes.customs[fields['clientCode']] = info.clientCode;
  //   setInvocesData(invoice);
  //   slots.map(e => {
  //     let tmpSlot = e
  //     tmpSlot.data.attributes.customs[fields['clientCode']] = info.clientCode;
  //     return tmpSlot
  //   })
  //   setInvocesToUploadData({ invoice, slots });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={{ fontSize: 10, opacity: 0.2 }}>Название:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setName(e)}
          value={name}
        />
      </View>
      <SlotList
        data={slots}
        setData={setSlots}
        navigation={navigation}
        save={()=>{}}
      />

      <View style={{ flexDirection: "row", flexBasis: "15%" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#207aff",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            // save();
            // navigation.goBack();
          }}
        >
          <Text style={{ color: "#fff" }}>Сохранить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d3d3d3",
            paddingHorizontal: 10,
          }}
          onPress={() => {
            setSlots((prev) => {
              navigation.push("Место", {
                data: [...prev, defaultSlot],
                setData: setSlots,
                index: prev.length + 1,
                navigation,
              });
              return [...prev, defaultSlot];
            });
          }}
        >
          <Text>Добавить место (добавлено:)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // height: '100%'
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 10,
    backgroundColor: "#f3f3f3",
  },
  input: {},
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
  errors: {
    color: "#fc2847",
  },
});

export default CreateScreen;
