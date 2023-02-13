# -*- coding: utf-8 -*-
import unittest

from count_lines import count_lines
tests = [
   ["tests/level1.js", 12],
   ["tests/level2.js", 40],
   ["tests/level3.js", 13],
   ["tests/level4.js", 5],
]

class test_count_lines(unittest.TestCase):
   def test_files(self):
      for file, expected_lines in tests:
         with self.subTest(msg = "Testing file " + file):
            f = open(file, "r")
            s = f.read()
            f.close()
            counted_lines = count_lines(s)
            self.assertEqual(counted_lines, expected_lines)

if __name__ == '__main__':
   unittest.main()
