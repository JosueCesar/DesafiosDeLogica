// Q1 Sort an array
var array_to_sort = [9,3,2,19,3,4,10,34,-99,99];

const mergeSort = (array: number[], start: number, end: number) => {
  if(end - start > 1) {
    let middle = Math.floor((end + start) / 2);

    mergeSort(array, start, middle);
    mergeSort(array, middle, end);
    merge(array, start, middle, end);
  }
};

const merge = (array: number[], start: number, middle: number, end: number) => {
  let left: number[] = [], right: number[] = [], topLeft = 0, topRight = 0;

  for(let i = 0; i < middle - start; i++){
    left[i] = array[start + i];
  }
  
  for(let i = 0; i < end - middle; i++){
    right[i] = array[middle + i];
  }

  for(let i = start; i < end; i++){
    if(topLeft >= middle - start) {
      array[i] = right[topRight];
      topRight++;
    }
    else if(topRight >= end - middle) {
      array[i] = left[topLeft];
      topLeft++;
    }
    else if(left[topLeft] <= right[topRight]) {
      array[i] = left[topLeft];
      topLeft++;
    }
    else {
      array[i] = right[topRight];
      topRight++;
    }
  }
};

mergeSort(array_to_sort, 0, array_to_sort.length - 1);

console.log(array_to_sort);