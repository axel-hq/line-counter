// This file has 7 lines total

const/*
   This is a multiline comment
   This doesn't count as code // This doesn't either
*/line1 = // Strings like the below should not be interpreted as more comments
"/* line2";
line3();
line4();
line5();
const line6 = "*/"; // which means that the lines above should be counted
const line7 = 7;
