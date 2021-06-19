export default function mergeSortWithAnimation(unsortedArray) {
  const animations = [];
  if (unsortedArray.length <= 1) {
    return { sortedArray: [...unsortedArray], animations };
  }

  const auxiliaryArray = unsortedArray.slice();
  mergeSort(
    unsortedArray,
    auxiliaryArray,
    0,
    unsortedArray.length - 1,
    animations
  );

  return { sortedArray: unsortedArray.slice(), animations };
}

function mergeSort(arr, aux, lo, hi, animations) {
  if (lo === hi) {
    return;
  }

  const mid = Math.floor((lo + hi) / 2);
  mergeSort(aux, arr, lo, mid, animations);
  mergeSort(aux, arr, mid + 1, hi, animations);
  merge(arr, aux, lo, mid, hi, animations);
}

function merge(arr, aux, lo, mid, hi, animations) {
  let i = lo;
  let j = mid + 1;
  let k = lo;

  while (i <= mid && j <= hi) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (aux[i] <= aux[j]) {
      animations.push([k, aux[i]]);
      arr[k] = aux[i];
      i++;
    } else {
      animations.push([k, aux[j]]);
      arr[k] = aux[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, aux[i]]);
    arr[k] = aux[i];
    i++;
    k++;
  }

  while (j <= hi) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, aux[j]]);
    arr[k] = aux[j];
    j++;
    k++;
  }
}
