export default function mergeSortWithAnimation(unsortedArray) {
  function mergeSort(arr, aux, lo, hi) {
    if (lo === hi) {
      return;
    }

    const mid = Math.floor((lo + hi) / 2);
    mergeSort(aux, arr, lo, mid);
    mergeSort(aux, arr, mid + 1, hi);
    merge(arr, aux, lo, mid, hi);
  }

  function merge(arr, aux, lo, mid, hi) {
    let i = lo;
    let j = mid + 1;
    let k = lo;

    while (i <= mid && j <= hi) {
      if (aux[i] <= aux[j]) {
        arr[k] = aux[i];
        i++;
      } else {
        arr[k] = aux[j];
        j++;
      }
      k++;
    }

    while (i <= mid) {
      arr[k] = aux[i];
      i++;
      k++;
    }

    while (j <= mid) {
      arr[k] = aux[j];
      j++;
      k++;
    }
  }

  if (unsortedArray.length <= 1) {
    return [...unsortedArray];
  }

  const auxiliaryArray = [...unsortedArray];
  mergeSort(unsortedArray, auxiliaryArray, 0, unsortedArray.length - 1);

  return [...unsortedArray];
}
