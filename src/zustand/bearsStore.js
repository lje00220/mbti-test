import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearsStore = create(
  persist(
    (set) => ({
      accessToken: null,

      isLogin: (token) => set({ accessToken: token }),
      isLogout: () => set({ accessToken: null }),
    }),
    {
      name: "accessToken",
    },
  ),
);

export default useBearsStore;
