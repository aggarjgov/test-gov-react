import { insertIf } from "./array.utils";

describe("insertIf()", () => {
  it.each([
    [true, 1, 2, 3], // Condition is true
    [false], // Condition is false
  ])("insertIf returns correct result when condition is %p", (condition, ...elements) =>
    expect(insertIf(condition, ...elements)).toEqual(condition ? elements : [])
  );
});
