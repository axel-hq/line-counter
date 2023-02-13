const fs = require("fs");
const count_lines = require("./count_lines");

const tests = [
   ["tests/level1.js", 12],
   ["tests/level2.js", 40],
   ["tests/level3.js", 13],
   ["tests/level4.js", 5],
];

describe("test files", function () {
   test.each(tests)("%s has %s lines of code", function (path, loc) {
      const contents = fs.readFileSync(path).toString();
      const counted_lines = count_lines(contents);
      expect(counted_lines).toBe(loc);
   });
});
