import axios from "axios";
import config from "@/requests/config";

export async function uploadInvocesSlots({
  resetStorageInvocesToUpload,
  invocesToUpload,
  setLoggerStore,
}) {
  for (const i in invocesToUpload) {
    const resInvoice = await axios
      .post(
        "https://app.salesap.ru/api/v1/deals",
        invocesToUpload[i].invoice,
        config,
      )
      .catch((e) =>
        setLoggerStore({
          data: e.data?.message,
          type: "send invoice",
          status: "error",
          date: new Date(),
        }),
      );
    setLoggerStore({ type: "send invoce", status: "Ok", date: new Date() });
    const tmp = invocesToUpload[i];
    tmp.invoice.data.id = resInvoice.data.data.id;
    await new Promise((r) => setTimeout(r, 500));
    for (const x in invocesToUpload[i].slots) {
      let tmp2 = JSON.parse(JSON.stringify({ ...invocesToUpload[i] }));
      tmp2.slots[x].data.relationships.deals = {
        data: [
          {
            type: "deals",
            id: resInvoice.data.data.id,
          },
        ],
      };
      const res2 = await axios.post("https://app.salesap.ru/api/v1/deals", invocesToUpload[i].slots[x], config)
        .catch((e) => setLoggerStore({ data: e.data?.message, date: new Date(), type: "send slot", status: "error", }));
      tmp2.slots[x].data.id = res2.data.data.id;
    }
  }
}

export default uploadInvocesSlots;
