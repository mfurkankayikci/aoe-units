<script setup>
import { computed, onMounted } from "vue";
import { useUnitsStore } from "../store/units";

import Filters from "../components/Filters.vue";
import TableUnits from "../components/TableUnits.vue";

const unitsStore = useUnitsStore();

const units = computed(() => unitsStore.getUnits);

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

          <TableUnits :units="units" />
        </div>
      </div>
    </div>
  </section>
</template>
