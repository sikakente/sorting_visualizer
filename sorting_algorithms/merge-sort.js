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

  console.log(`Merging from Lo: ${lo}: mid: ${mid}: hi: ${hi}`);

  while (i <= mid && j <= hi) {
    console.log(`Comparing i:${i}; j:${j}`);
    console.log("Before comparison: ", aux, arr);

    animations.push([i, j]);
    animations.push([i, j]);
    if (aux[i] <= aux[j]) {
      console.log(`Swapping i:${i}; j:${j}`);
      animations.push([k, aux[i]]);
      arr[k] = aux[i];
      i++;
    } else {
      animations.push([k, aux[j]]);
      arr[k] = aux[j];
      j++;
    }
    k++;
    console.log("After comparison: ", aux, arr);
  }

  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, aux[i]]);
    arr[k] = aux[i];
    i++;
    k++;
    console.log("After Single comparison: ", aux, arr);
  }

  while (j <= hi) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, aux[j]]);
    arr[k] = aux[j];
    j++;
    k++;
    console.log("After Single comparison: ", aux, arr);
  }
}
