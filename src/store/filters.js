import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    filters: {
      wood: {
        isvisible: false,
        value: [0, 200],
      },
      food: {
        isvisible: false,
        value: [0, 200],
      },
      gold: {
        isvisible: false,
        value: [0, 200],
      },
    },
  }),
  actions: {
    setPage(page) {
      this.currentPage = page;
    },
    updateFilter(key, value) {
      this.filters[key].value = value;
    },
    updateFilterVisibility(key, value) {
      this.filters[key].isvisible = value;
    },
  },
  getters: {
    getFilters: (state) => state.filters,
  },
});
