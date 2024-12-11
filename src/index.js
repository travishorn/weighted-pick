/**
 * @template T
 * @param {WeightedItem<T>[]} weightedItems
 * @returns {T}
 * @throws {Error} If the input array is empty or not in the correct format
 */
export function pick(weightedItems) {
  if (!Array.isArray(weightedItems) || weightedItems.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  for (const item of weightedItems) {
    if (typeof item.weight !== "number" || item.weight <= 0) {
      throw new Error("Each item must have a positive number as weight");
    }
  }

  const totalWeight = weightedItems.reduce((sum, item) => sum + item.weight, 0);
  const randomNum = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (const weightedItem of weightedItems) {
    cumulativeWeight += weightedItem.weight;
    if (randomNum < cumulativeWeight) {
      return weightedItem.item;
    }
  }

  // Fallback (unreachable due to logic above)
  throw new Error("Unexpected error: no item was selected");
}
