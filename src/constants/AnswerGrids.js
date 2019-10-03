import React from 'react';

export const Answers = [
  {
    title: (<p> 1 to 15 </p>),
    grid: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> 15 to 1 </p>),
    grid: [
      [null, 15, 14, 13],
      [12, 11, 10, 9],
      [8, 7, 6, 5],
      [4, 3, 2, 1]
    ],
    emptyPos: [0, 0]
  },

  {
    title: (<p> 1 to 15 <br /> from top to bottom </p>),
    grid: [
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, null]
    ],
    emptyPos: [3, 3]
  }, 

  {
    title: (<p> 15 to 1 <br /> from top to bottom </p>),
    grid: [
      [12, 13, 14, 15],
      [8, 9, 10, 11],
      [4, 5, 6, 7],
      [1, 2, 3, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> 1 to 15 vertical <br /> from bottom to top </p>),
    grid: [
      [null, 12, 8, 4],
      [15, 11, 7, 3],
      [14, 10, 6, 2],
      [13, 9, 5, 1]
    ],
    emptyPos: [0, 0]
  },

  {
    title: (<p> 1 to 15 (right-hand corner) <br /> from top to bottom </p>),
    grid: [
      [4, 3, 2, 1],
      [8, 7, 6, 5],
      [12, 11, 10, 9],
      [null, 13, 14, 15]
    ],
    emptyPos: [3, 0]
  },

  {
    title: (<p> 1 to 15 continuous <br /> from bottom to top </p>),
    grid: [
      [4, 5, 12, 13],
      [3, 6, 11, 14],
      [2, 7, 10, 15],
      [1, 8, 9, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> 1 to 15 continuous (reversed) <br /> from top to bottom </p>),
    grid: [
      [null, 9, 8, 1],
      [15, 10, 7, 2],
      [14, 11, 6, 3],
      [13, 12, 5, 4]
    ],
    emptyPos: [0, 0]
  },

  {
    title: (<p> 1 to 15 horizontal <br /> from bottom to top </p>),
    grid: [
      [null, 15, 14, 13],
      [9, 10, 11, 12],
      [5, 6, 7, 8],
      [1, 2, 3, 4]
    ],
    emptyPos: [0, 0]
  },

  {
    title: (<p> 1 to 15 around <br /> and in and out </p>),
    grid: [
      [1, 2, 3, null],
      [15, 14, 13, 4],
      [10, 11, 12, 5],
      [9, 8, 7, 6]
    ],
    emptyPos: [0, 3]
  },

  {
    title: (<p> Diagonal from lower <br /> left-hand corner </p>),
    grid: [
      [7, 11, 14, null],
      [4, 8, 12, 15],
      [2, 5, 9, 13],
      [1, 3, 6, 10]
    ],
    emptyPos: [0, 3]
  },

  {
    title: (<p> Diagonal from upper <br /> right-hand corner </p>),
    grid: [
      [7, 4, 2, 1],
      [11, 8, 5, 3],
      [14, 12, 9, 6],
      [null, 15, 13, 10]
    ],
    emptyPos: [3, 0]
  },

  {
    title: (<p> Left spiral from center </p>),
    grid: [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [null, 15, 14, 13]
    ],
    emptyPos: [3, 0]
  },

  {
    title: (<p> Right spiral from center </p>),
    grid: [
      [13, 14, 15, null],
      [12, 3, 4, 5],
      [11, 2, 1, 6],
      [10, 9, 8, 7]
    ],
    emptyPos: [0, 3]
  },

  {
    title: (<p> Odd on top <br /> even on bottom </p>),
    grid: [
      [1, 3, 5, 7],
      [9, 11, 13, 15],
      [2, 4, 6, 8],
      [10, 12, 14, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> Even on top <br /> odd on bottom </p>),
    grid: [
      [2, 4, 6, 8],
      [10, 12, 14, null],
      [1, 3, 5, 7],
      [9, 11, 13, 15]
    ],
    emptyPos: [1, 3]
  },

  {
    title: (<p> Odd on top <br /> even on bottom (reversed) </p>),
    grid: [
      [15, 13, 11, 9],
      [1, 3, 5, 7],
      [14, 12, 10, 8],
      [null, 2, 4, 6]
    ],
    emptyPos: [3, 0]
  },

  {
    title: (<p> Odd left  <br /> even right </p>),
    grid: [
      [1, 3, 2, 4],
      [5, 7, 6, 8],
      [9, 10, 13, 14],
      [13, 15, 14, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> Alternate odd line  <br /> and even line </p>),
    grid: [
      [1, 3, 5, 7],
      [2, 4, 5, 8],
      [9, 11, 13, 15],
      [10, 12, 14, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> Alternating  <br /> right to left </p>),
    grid: [
      [2, 4, 1, 3],
      [6, 8, 5, 7],
      [10, 12, 9, 11],
      [14, null, 13, 15]
    ],
    emptyPos: [3, 1]
  },

  {
    title: (<p> Zigzag 1 to 15 </p>),
    grid: [
      [1, 2, 5, 6],
      [3, 4, 7, 8],
      [9, 10, 13, 14],
      [11, 12, 15, null]
    ],
    emptyPos: [3, 3]
  },

  {
    title: (<p> Zigzag on left <br /> continuous on right </p>),
    grid: [
      [1, 2, 14, 13],
      [3, 4, 15, 12],
      [5, 6, null, 11],
      [7, 8, 9, 10]
    ],
    emptyPos: [2, 2]
  },

  {
    title: (<p> Zigzag down left <br /> up right </p>),
    grid: [
      [1, 2, null, 15],
      [3, 4, 13, 14],
      [5, 6, 12, 11],
      [7, 8, 9, 10]
    ],
    emptyPos: [0, 2]
  },

  {
    title: (<p> Adds to 34 in all directions <br /> (blank counts as 16)</p>),
    grid: [
      [13, 1, 12, 8],
      [4, null, 5, 9],
      [7, 11, 2, 14],
      [10, 6, 15, 3]
    ],
    emptyPos: [1, 1]
  },

  {
    title: (<p> Adds to 30 <br /> in all directions </p>),
    grid: [
      [12, 2, 1, 15],
      [7, 9, 10, 4],
      [11, 5, 6, 8],
      [null, 14, 13, 3]
    ],
    emptyPos: [3, 0]
  },

  {
    title: (<p> Around the edges </p>),
    grid: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, null, 15, 6],
      [10, 9, 8, 7]
    ],
    emptyPos: [2, 2]
  },

  {
    title: (<p> Around the edges <br /> from bottom </p>),
    grid: [
      [7, 8, 9, 10],
      [6, 15, null, 11],
      [5, 14, 13, 12],
      [4, 3, 2, 1]
    ],
    emptyPos: [1, 2]
  },

  {
    title: (<p> Around the edges <br /> from bottom up </p>),
    grid: [
      [7, 6, 5, 4],
      [8, 15, 14, 3],
      [9, null, 13, 2],
      [10, 11, 12, 1]
    ],
    emptyPos: [2, 1]
  },

  {
    title: (<p> Around the edges <br /> odd and even </p>),
    grid: [
      [7, 6, 5, 4],
      [8, 15, 14, 3],
      [9, null, 13, 2],
      [10, 11, 12, 1]
    ],
    emptyPos: [2, 1]
  },

  {
    title: (<p> Novel "edge" <br /> problem from center</p>),
    grid: [
      [4, 5, 6, 7],
      [3, 2, 1, 8],
      [14, 15, null, 9],
      [13, 12, 11, 10]
    ],
    emptyPos: [2, 2]
  },

  {
    title: (<p> Checkerboard 1-3-5-7 <br /> in corners </p>),
    grid: [
      [1, 2, 4, 3],
      [null, 9, 11, 6],
      [14, 13, 15, 8],
      [5, 12, 10, 7]
    ],
    emptyPos: [1, 0]
  },

  {
    title: (<p> Up and down <br /> and around </p>),
    grid: [
      [13, 12, 11, 10],
      [14, 3, 4, 9],
      [15, 2, 5, 8],
      [null, 1, 6, 7]
    ],
    emptyPos: [3, 0]
  }

]
