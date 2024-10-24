<script setup>
import { computed, onMounted } from "vue";
import { useUnitsStore } from "../store/units";
import Pagination from "../components/Pagination.vue";

const unitsStore = useUnitsStore();

const units = computed(() => unitsStore.getUnits);

onMounted(async () => {
  const data = await unitsStore.fetchUnits();
  unitsStore.setUnits(data);
});
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-xl mb-4">Units</h1>
    <table class="min-w-full border-collapse">
      <thead>
        <tr class="border-b">
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Costs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unit in units" :key="unit.id" class="border-b">
          <td>{{ unit.id }}</td>
          <td>{{ unit.name }}</td>
          <td>{{ unit.age }}</td>
          <td>
            <span v-for="(cost, key) in unit.costs" :key="key">
              {{ key }}: {{ cost }},
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination />
  </div>
</template>
