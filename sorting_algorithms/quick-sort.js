export default function quickSortWithAnimation(unsortedArray) {
  const animations = [];
  quickSort(unsortedArray, 0, unsortedArray.length - 1);
  return { sortedArray: unsortedArray.slice(), animations };
}

function quickSort(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  let pivot = partition(arr, lo, hi);
  quickSort(arr, lo, pivot - 1);
  quickSort(arr, pivot + 1, hi);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (true) {
    while (i <= end && arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i >= j) {
      break;
    }
    swap(arr, i, j);
  }

  swap(arr, j, start);
  return j;
}
