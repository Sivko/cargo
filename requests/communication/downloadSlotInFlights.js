// import scanStore from "@/stores/scanStore";

import axios from "axios";
import config, { timeout } from "../config";

// const { idFlightsToDownloads } = scanStore();
export default async function downloadSlotInFlights({idFlightsToDownloads, resetStoragescanItems, scanItems, setLoading}) {
  console.log(scanItems, "scanItems");
  setLoading(true);
  for (let i in idFlightsToDownloads) {
    const url = `https://app.salesap.ru/api/v1/deals/${idFlightsToDownloads[i]}?include=deals`;
    const res = await axios.get(url, config);
    if (res.data?.included?.length) {
      let tmp = scanItems.filter((e) => e.flight.data.id === idFlightsToDownloads[i])[0];
      tmp.slots = res.data?.included.map(e => ({ data: { id: e.id, type: e.type, attributes: e.attributes } }));
      console.log(([tmp, ...scanItems.filter((e) => e.flight.data.id !== idFlightsToDownloads[i])]), "TMP");
      resetStoragescanItems([tmp, ...scanItems.filter((e) => e.flight.data.id !== idFlightsToDownloads[i])]);
    }
    await new Promise(r => setTimeout(r, timeout));
    console.log(res);
  }
  setLoading(false);
}
