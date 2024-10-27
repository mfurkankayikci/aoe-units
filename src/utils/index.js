export const filterByAge = (units, age) => {
  return units.filter((unit) => unit.age === age || age === "All");
};

export const filterByCostRange = (units, costType, range) => {
  return units.filter((unit) => {
    const cost = unit.cost?.[costType];
    return cost && cost >= range[0] && cost <= range[1];
  });
};
