import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearsStore = create(
  persist(
    (set) => ({
      accessToken: null,
      nickname: null,
      userId: null,

      isLogin: (token) => set({ accessToken: token }),
      isLogout: () => set({ accessToken: null }),
      changeNickname: (name) => set({ nickname: name }),
      setUserId: (id) => set({ userId: id }),
    }),
    {
      name: "accessToken",
    },
  ),
);

export default useBearsStore;
