"use strict";

main();

/*
 * Flipping the Matrix
 * Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer.
 * He can reverse any of its rows or columns any number of times. He can reverse any of its rows or columns any
 * number of times. The goal of the game is to maximize the sum of the elements in the n x n submatrix located
 * in the upper left quadrant of the matrix.
 */

// My solution
function flippingMatrix(matrix) {
  let sum = 0;
  const matrixSize = matrix.length;
  const quadrantSize = matrixSize / 2;

  for (let x = 0; x < quadrantSize; x++) {
    for (let y = 0; y < quadrantSize; y++) {
      const topX = x;
      const bottomX = matrixSize - x - 1;
      const leftY = y;
      const rightY = matrixSize - y - 1;

      const topLeft = matrix[topX][leftY];
      const topRight = matrix[topX][rightY];
      const bottomLeft = matrix[bottomX][leftY];
      const bottomRight = matrix[bottomX][rightY];

      console.log(topLeft, topRight);
      console.log(bottomLeft, bottomRight);
      console.log(
        "Max: " + Math.max(topLeft, topRight, bottomLeft, bottomRight)
      );
      console.log("\n");

      sum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return sum;
}

function main() {
  const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ];

  console.log("MaxSum:" + flippingMatrix(matrix));

  let sum = 0;

  sum += Math.max(1, 2, 3, 4);
  console.log(sum);
}

function printMatrix(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let rowString = "";
    for (let j = 0; j < columns; j++) {
      rowString += matrix[i][j] + " ";
    }
    console.log(rowString.trim());
  }
}
