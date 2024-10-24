<script setup>
import { computed } from "vue";
import { useUnitsStore } from "../store/units";

const unitsStore = useUnitsStore();

const currentPage = computed(() => unitsStore.currentPage);
const totalPages = computed(() => unitsStore.totalPages);

const setPage = (page) => {
  unitsStore.setPage(page);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    unitsStore.setPage(currentPage.value + 1);
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    unitsStore.setPage(currentPage.value - 1);
  }
};
</script>

<template>
  <div class="flex justify-center items-center space-x-2 mt-4">
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
    >
      Prev
    </button>

    <span
      v-for="page in totalPages"
      :key="page"
      @click="setPage(page)"
      class="px-4 py-2 cursor-pointer"
      :class="{ 'bg-blue-200': page === currentPage }"
    >
      {{ page }}
    </span>

    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
    >
      Next
    </button>
  </div>
</template>
