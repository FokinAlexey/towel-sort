
// You should implement your task here.

module.exports = function towelSort (matrix) {
for (i=1; i<matrix.length; i = i+2) {
      matrix[i].reverse()
  }
return matrix.concat();
}
