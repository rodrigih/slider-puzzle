import React from 'react';

const Answers = [
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
    title: (<p> 1 to 15 vertical <br /> from top to bottom </p>),
    grid: [
      [null, 12, 8, 4],
      [15, 11, 7, 3],
      [14, 10, 6, 2],
      [13, 9, 5, 1]
    ],
    emptyPos: [0, 0]
  }
]

export default Answers;
