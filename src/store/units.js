import { defineStore } from "pinia";

export const useUnitsStore = defineStore("units", {
  state: () => ({
    units: [],
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
  }),
  actions: {
    async fetchUnits() {
      const response = await fetch("/age-of-empires-units.json");
      const { units: data } = await response.json();

      return data;
    },
    setPage(page) {
      this.currentPage = page;
    },
    setUnits(units) {
      this.totalPages = Math.ceil(units.length / 10);
      this.units = units;
    },
  },
  getters: {
    getUnits: (state) => {
      const start = (state.currentPage - 1) * state.pageSize;
      const end = start + state.pageSize;

      return state.units.slice(start, end);
    },
  },
});
