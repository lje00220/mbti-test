import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearsStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: "",

      isLogin: (token) => set({ isAuthenticated: true, accessToken: token }),
      isLogout: () => set({ isAuthenticated: false, accessToken: "" }),
    }),
    {
      name: "accessToken",
    },
  ),
);

export default useBearsStore;
