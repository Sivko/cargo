import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";

// const logginStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

const logginStore = create((set) => ({
  user: {},
  getStorage: async () => {
    const storage = await AsyncStorage.getItem("user");
    if (storage === null) return;
    const data = JSON.parse(storage);
    return set({ user: { ...data } });
  },
  loggin: async ({ id, firstName, lastName, email, token }) => {
    const data = { id, firstName, lastName, email, token };
    await AsyncStorage.setItem("user", JSON.stringify(data));
    return set((state) => ({
      user: data,
    }));
  },
  unloggin: async () => {
    await AsyncStorage.setItem("user", null);
    return set((state) => ({ user: {} }));
  },
}));

export default logginStore;
