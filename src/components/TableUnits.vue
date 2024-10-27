<script setup>
import Pagination from "../components/Pagination.vue";

defineProps({
  units: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="overflow-x-auto mb-8">
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
        <tr v-if="units.length === 0">
          <td class="p-2 whitespace-nowrap text-center" colspan="4">
            No units found.
          </td>
        </tr>
        <tr v-else v-for="unit in units" :key="unit.id" class="border-b">
          <td class="p-2 whitespace-nowrap">{{ unit.id }}</td>
          <td class="p-2 whitespace-nowrap">
            <RouterLink :to="`/units/${unit.id}`">{{ unit.name }}</RouterLink>
          </td>
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
</template>
