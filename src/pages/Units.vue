<script setup>
import { computed, onMounted } from "vue";
import { useFiltersStore } from "../store/filters";
import { useUnitsStore } from "../store/units";
import Filters from "../components/Filters.vue";
import TableUnits from "../components/TableUnits.vue";
import { filterByAge, filterByCostRange } from "../utils";

const filtersStore = useFiltersStore();
const unitsStore = useUnitsStore();

const filters = computed(() => filtersStore.filters);
const units = computed(() => unitsStore.getUnits);
const currentPage = computed(() => unitsStore.currentPage);
const pageSize = computed(() => unitsStore.pageSize);
const filteredUnits = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  const { wood, food, gold, age } = filters.value;

  let result = filterByAge(units.value, age.value);

  if (wood.isvisible) {
    result = filterByCostRange(result, "Wood", wood.value);
  }

  if (food.isvisible) {
    result = filterByCostRange(result, "Food", food.value);
  }

  if (gold.isvisible) {
    result = filterByCostRange(result, "Gold", gold.value);
  }

  unitsStore.setTotalPages(Math.ceil(result.length / pageSize.value));

  return result.slice(start, end);
});

onMounted(async () => {
  const data = await unitsStore.fetchUnits();
  unitsStore.setUnits(data);
});
</script>

<template>
  <section class="py-4">
    <div class="container mx-auto">
      <div class="rounded-xl bg-white p-8">
        <h2 class="font-semibold text-center text-[32px] mb-4">Units</h2>

        <hr />

        <div class="mt-8">
          <Filters />

          <TableUnits :units="filteredUnits" />
        </div>
      </div>
    </div>
  </section>
</template>
