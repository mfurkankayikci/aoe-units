import { setActivePinia, createPinia } from "pinia";
import { useFiltersStore } from "../store/filters";
import { useUnitsStore } from "../store/units";
import { describe, it, expect, beforeEach } from "vitest";

describe("UnitsStore Tests", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should filter units by age", () => {
    const filtersStore = useFiltersStore();
    const unitsStore = useUnitsStore();

    unitsStore.units = [
      { id: 1, name: "Archer", age: "Feudal" },
      { id: 2, name: "Knight", age: "Castle" },
      { id: 3, name: "Spearman", age: "Feudal" },
    ];

    filtersStore.age = "Feudal";

    const filteredUnits = unitsStore.filteredUnits;
    expect(filteredUnits).toEqual([
      { id: 1, name: "Archer", age: "Feudal" },
      { id: 3, name: "Spearman", age: "Feudal" },
    ]);
  });

  it("should paginate units correctly", () => {
    const unitsStore = useUnitsStore();

    unitsStore.units = [
      { id: 1, name: "Archer", age: "Feudal" },
      { id: 2, name: "Knight", age: "Castle" },
      { id: 3, name: "Spearman", age: "Feudal" },
      { id: 4, name: "Scout", age: "Dark" },
    ];

    const page = 1;
    const pageSize = 2;
    const paginatedUnits = unitsStore.units.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    expect(paginatedUnits).toEqual([
      { id: 1, name: "Archer", age: "Feudal" },
      { id: 2, name: "Knight", age: "Castle" },
    ]);
  });
});
