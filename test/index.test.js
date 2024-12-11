import { describe, expect, test } from "vitest";
import { pick } from "../src/index";

const weightedItems = [
  { item: "apple", weight: 10 },
  { item: "banana", weight: 5 },
  { item: "cherry", weight: 1 },
];

describe("pick()", () => {
  test("picks an item from the given array", () => {
    expect(pick(weightedItems)).toSatisfy((item) => {
      return ["apple", "banana", "cherry"].includes(item);
    });
  });

  test("respects weights", () => {
    /** @type {Object.<string, number>} */
    const results = {
      apple: 0,
      banana: 0,
      cherry: 0,
    };

    // Collect results from 10,000 picks
    for (let i = 0; i < 10000; i++) {
      results[pick(weightedItems)] += 1;
    }

    // Apples should appear roughly twice as often as bananas
    expect(results.apple).toBeGreaterThan(results.banana * 1.8);

    // Bananas should appear roughly five times as often as cherries
    expect(results.banana).toBeGreaterThan(results.cherry * 4.5);
  });
});
