// This file has 4 lines total

const line1 =/* Despite being two expressions and on two lines,
right now we just want to consider this one line*/2; const z = 3;
         	//       this should not be interpreted as a multiline comment /*
           
   const line2 = 7;
   // This should not be interpreted as closing a multiline comment */

const line3 = 3; /* comment at the end of a line */
const line4 = 10;
