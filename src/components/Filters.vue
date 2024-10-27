<script setup>
import { ref, computed } from "vue";
import { useFiltersStore } from "../store/filters";
import Slider from "@vueform/slider";

const filtersStore = useFiltersStore();
const filters = computed(() => filtersStore.filters);

const ages = ref(["All", "Dark", "Feudal", "Castle", "Imperial"]);
const selectedAge = ref(filters.value.age.value);

const setSelected = (value) => {
  selectedAge.value = value;
  filtersStore.updateFilter("age", value);
};

const updateSlider = (key, value) => {
  filtersStore.updateFilter(key, value);
};

const updateSliderVisibility = (key, value) => {
  filtersStore.updateFilterVisibility(key, value);
};
</script>

<template>
  <div class="flex flex-col gap-2 mb-8">
    <span class="font-semibold">Ages</span>

    <div class="flex flex-wrap gap-1">
      <button
        v-for="age in ages"
        :key="age"
        :class="[
          'px-4 py-2 rounded-md transition-all',
          selectedAge === age ? 'bg-[#E9E9D8]' : 'bg-gray-200',
        ]"
        @click="setSelected(age)"
      >
        {{ age }}
      </button>
    </div>
  </div>

  <div class="flex flex-col gap-2 mb-8">
    <span class="font-semibold">Costs</span>

    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <input
          type="checkbox"
          :checked="filters.wood.isvisible"
          @input="updateSliderVisibility('wood', $event.target.checked)"
        />
        <label
          for="volume"
          :class="{ 'text-[#9ca3af]': !filters.wood.isvisible }"
          >Wood</label
        >
      </div>
      <Slider
        :value="filters.wood.value"
        name="wood"
        :step="20"
        :default="[0, 200]"
        :min="0"
        :max="200"
        :disabled="!filters.wood.isvisible"
        show-tooltip="focus"
        class="w-[200px]"
        @change="updateSlider('wood', $event)"
      />
      <span v-if="filters.wood.isvisible" class="font-semibold">{{
        `${filters.wood.value[0]} - ${filters.wood.value[1]}`
      }}</span>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <input
          type="checkbox"
          :checked="filters.food.isvisible"
          @input="updateSliderVisibility('food', $event.target.checked)"
        />
        <label
          for="volume"
          :class="{ 'text-[#9ca3af]': !filters.food.isvisible }"
          >Food</label
        >
      </div>
      <Slider
        :value="filters.food.value"
        name="food"
        :step="20"
        :default="[0, 200]"
        :min="0"
        :max="200"
        :disabled="!filters.food.isvisible"
        show-tooltip="focus"
        class="w-[200px]"
        @change="updateSlider('food', $event)"
      />
      <span v-if="filters.food.isvisible" class="font-semibold">{{
        `${filters.food.value[0]} - ${filters.food.value[1]}`
      }}</span>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <input
          type="checkbox"
          :checked="filters.gold.isvisible"
          @input="updateSliderVisibility('gold', $event.target.checked)"
        />
        <label
          for="volume"
          :class="{ 'text-[#9ca3af]': !filters.gold.isvisible }"
          >Gold</label
        >
      </div>

      <Slider
        :value="filters.gold.value"
        name="gold"
        :step="20"
        :default="[0, 200]"
        :min="0"
        :max="200"
        :disabled="!filters.gold.isvisible"
        show-tooltip="focus"
        class="w-[200px]"
        @change="updateSlider('gold', $event)"
      />
      <span v-if="filters.gold.isvisible" class="font-semibold">{{
        `${filters.gold.value[0]} - ${filters.gold.value[1]}`
      }}</span>
    </div>
  </div>
</template>
