import { create } from "zustand";

type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,

  // TODO 1. 현재 count를 기준으로 1 증가시키세요.
  increase: () => {
    // 여기에 코드를 작성하세요.
  },

  // TODO 2. 현재 count를 기준으로 1 감소시키세요.
  decrease: () => {
    // 여기에 코드를 작성하세요.
  },

  // TODO 3. count를 0으로 변경하세요.
  reset: () => {
    // 여기에 코드를 작성하세요.
  },
}));
