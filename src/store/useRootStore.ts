import { defineStore } from "pinia";

const useRootStore = defineStore("root", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    statLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});

export default useRootStore;
