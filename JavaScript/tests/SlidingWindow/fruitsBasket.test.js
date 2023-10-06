const fun = require("../../src/SlidingWindow/fruitsIntoBaskets");

test("array with ['A'] ", () => {
  expect(fun(["A"])).toBe(0);
});

test("array with ['A','B','C','D','C','D','A'] ", () => {
  expect(fun(["A", "B", "C", "D", "C", "D", "A"])).toBe(4);
});

test("array with ['A','B','A','B','A','B','A'] ", () => {
  expect(fun(["A", "B", "A", "B", "A", "B", "A"])).toBe(7);
});

test("array with ['A','B','C','D','E','R','F'] ", () => {
  expect(fun(["A", "B", "C", "D", "E", "R", "F"])).toBe(2);
});

test("array with ['A','B','C','D','E','R','F'] ", () => {
  expect(fun(["A", "B", "C", "D", "E", "R", "F"])).toBe(2);
});
