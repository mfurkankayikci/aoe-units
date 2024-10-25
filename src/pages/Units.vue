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
  <section class="py-4">
    <div class="container mx-auto">
      <div class="rounded-xl bg-white p-8">
        <h2 class="font-semibold text-center text-[32px] mb-4">Units</h2>

        <hr />

        <div class="mt-8">
          <div class="flex flex-col gap-2 mb-8">
            <span class="font-semibold">Costs</span>

            <div class="flex gap-4">
              <div class="flex gap-2">
                <input type="checkbox" />
                <label for="volume">Wood</label>
              </div>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="20"
                class="max-w-[200px]"
              />
              <span class="font-semibold">50</span>
            </div>

            <div class="flex gap-4">
              <div class="flex gap-2">
                <input type="checkbox" />
                <label for="volume">Food</label>
              </div>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="11"
                class="max-w-[200px]"
              />
              <span class="font-semibold">50</span>
            </div>

            <div class="flex gap-4">
              <div class="flex gap-2">
                <input type="checkbox" />
                <label for="volume">Gold</label>
              </div>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="20"
                class="max-w-[200px]"
              />
              <span class="font-semibold">50</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold bg-[#E9E9D8]">
                <tr>
                  <th class="px-2 py-4 whitespace-nowrap w-32">
                    <div class="font-semibold text-left">ID</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left w-full">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Age</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Cost</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="unit in units" :key="unit.id" class="border-b">
                  <td class="p-2 whitespace-nowrap">{{ unit.id }}</td>
                  <td class="p-2 whitespace-nowrap">{{ unit.name }}</td>
                  <td class="p-2 whitespace-nowrap">{{ unit.age }}</td>
                  <td class="p-2 whitespace-nowrap">
                    <span v-for="(cost, key) in unit.cost" :key="key">
                      {{ key }}: {{ cost }},
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  </section>
</template>
