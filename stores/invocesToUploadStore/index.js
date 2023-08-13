import AsyncStorage from "@react-native-async-storage/async-storage";
import * as zustand from "zustand";

const invocesToUploadStore = zustand.create((set) => ({
  invocesToUploadStore: [],
  getStorage: async () => {
    const storage = await AsyncStorage.getItem("invocesToUploadStore");
    if (storage === null) return;
    const data = JSON.parse(storage);
    return set({ invoces: { ...data } });
  },
  setStorage: async ({ invoice, slots, images }) => {
    const data = { invoice, slots, images };
    debugger;
    // await AsyncStorage.setItem("invoces", JSON.stringify(this.invoces, data));
    return set((state) => ({
      invoces: [data, ...state],
    }));
  },
  removeStorage: async () => {
    await AsyncStorage.setItem("invocesToUploadStore", null);
    return set((state) => ({ invocesToUploadStore: [] }));
  },
}));

export default invocesToUploadStore;
