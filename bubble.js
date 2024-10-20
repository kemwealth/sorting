function bubbleSort(array) {
    let numSwaps;
    for (let i = array.length; i > 0; i--) {
        numSwaps = false; // Initialize as false at the beginning of each iteration
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                numSwaps = true; // Set to true if a swap occurred
            }
        }
        // If no elements were swapped, the array is sorted
        if (!numSwaps) break;
    }
    return array;
}

module.exports = bubbleSort;
