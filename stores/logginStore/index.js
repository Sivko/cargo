import { create } from "zustand";

// const logginStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

const logginStore = create((set) => ({
  user: {},
  loggin: ({ id, firstName, lastName, email, token }) => {
    return set((state) => ({
      user: { id, firstName, lastName, email, token },
    }));
  },
  unloggin: () => set((state) => ({ user: {} })),
}));

export default logginStore;
