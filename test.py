# -*- coding: utf-8 -*-
import unittest

from count_lines_solution import count_lines
tests = [
   ["tests/comment_switch.js", 10],
   ["tests/fizzbuzz.js", 12],
   ["tests/multilines.js", 7],
   ["tests/whitespace.js", 4],
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
