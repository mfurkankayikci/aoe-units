<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUnitsStore } from "../store/units";

const route = useRoute();
const unitsStore = useUnitsStore();

const units = computed(() => unitsStore.getUnits);
const unit = ref({});

const attributeMapping = computed(() => {
  return [
    { label: "Expansion", value: unit.value.expansion },
    { label: "Age", value: unit.value.age },
    { label: "Cost", value: unit.value.cost },
    { label: "Build Time", value: `${unit.value.build_time} seconds` },
    { label: "Reload Time", value: `${unit.value.reload_time} seconds` },
    { label: "Attack Delay", value: `${unit.value.attack_delay} seconds` },
    { label: "Movement Rate", value: unit.value.movement_rate },
    { label: "Line of Sight", value: unit.value.line_of_sight },
    { label: "Hit Points", value: unit.value.hit_points },
    { label: "Range", value: unit.value.range },
    { label: "Attack", value: unit.value.attack },
    { label: "Armor", value: unit.value.armor },
    { label: "Accuracy", value: unit.value.accuracy },
    { label: "Attack Bonuses", value: unit.value.attack_bonus, isList: true },
  ];
});

onMounted(async () => {
  if (units.value.length === 0) {
    const data = await unitsStore.fetchUnits();
    unitsStore.setUnits(data);
  }

  unit.value = units.value.find((u) => u.id == route.params.id);
});
</script>

<template>
  <section class="py-4">
    <div class="container mx-auto">
      <div class="rounded-xl bg-white p-8">
        <h2 class="font-semibold text-center text-[32px] mb-4">Unit Details</h2>

        <hr />

        <div class="mt-8">
          <div class="unit-details">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              {{ unit.name }}
            </h2>
            <p class="text-gray-600 mb-4">
              <strong>Description:</strong> {{ unit.description }}
            </p>

            <table
              class="min-w-full border border-gray-300 rounded-lg overflow-hidden"
            >
              <thead>
                <tr class="bg-[#E9E9D8] text-left">
                  <th class="py-2 px-4">Attribute</th>
                  <th class="py-2 px-4">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(attribute, index) in attributeMapping"
                  :key="index"
                  class="border-b"
                >
                  <td class="py-2 px-4 font-medium">
                    {{ attribute.label }}
                  </td>
                  <td class="py-2 px-4">
                    <div v-if="attribute.isList">
                      <ul>
                        <li v-for="(value, idx) in attribute.value" :key="idx">
                          {{ value }}
                        </li>
                      </ul>
                    </div>
                    <div v-else-if="typeof attribute.value === 'object'">
                      <ul>
                        <li v-for="(val, key) in attribute.value" :key="key">
                          {{ key }}: {{ val }}
                        </li>
                      </ul>
                    </div>
                    <div v-else>{{ attribute.value }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
