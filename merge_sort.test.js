const expect = require('expect');
const merge = require('./merge_sort')

test('Returns from function', () => {
    // Arrange
    const arr = [8, 2, 6, 1, 5, 0, 3, 7, 9, 12];
    const ascSortedArr = [0, 1, 2, 3, 5, 6, 7, 8, 9, 12];

    // Act
    const result = merge.mergeSort(arr); // asc
    console.log(result);

    // Assert
    expect(result).toEqual(ascSortedArr);
});

[
    8, 6, 5, 2, 1,
   12, 9, 7, 3, 0
 ]