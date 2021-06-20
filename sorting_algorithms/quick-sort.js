export const IS_FORWARD_COMPARING = 0;
export const IS_BACKWARD_COMPARING = 1;
export const IS_REVERSING = 2;
export const IS_SWAPPING = 3;

export default function quickSortWithAnimation(unsortedArray) {
  const animations = [];
  quickSort(unsortedArray, 0, unsortedArray.length - 1, animations);
  return { sortedArray: unsortedArray.slice(), animations };
}

function quickSort(arr, lo, hi, animations) {
  if (lo >= hi) {
    return;
  }
  let pivot = partition(arr, lo, hi, animations);
  quickSort(arr, lo, pivot - 1, animations);
  quickSort(arr, pivot + 1, hi, animations);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end, animations) {
  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (true) {
    while (i <= end && arr[i] <= pivot) {
      animations.push([i, start, IS_FORWARD_COMPARING]);
      animations.push([i, start, IS_REVERSING]);
      i++;
    }
    while (arr[j] > pivot) {
      animations.push([j, start, IS_BACKWARD_COMPARING]);
      animations.push([j, start, IS_REVERSING]);
      j--;
    }

    if (i >= j) {
      break;
    }

    animations.push([i, j, IS_SWAPPING]);
    swap(arr, i, j);
  }

  animations.push([j, start, IS_SWAPPING]);
  swap(arr, j, start);
  return j;
}
