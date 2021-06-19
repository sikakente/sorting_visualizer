export default function ButtonBar(props) {
  const {
    onGenerateBars,
    onMergeSort,
    onInsertionSort,
    onSelectionSort,
    onQuickSort,
    onStop,
  } = props;
  return (
    <div className="container ">
      <button type="button" className="btn btn-dark" onClick={onGenerateBars}>
        Generate Arrays
      </button>

      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={onMergeSort}>
          Merge Sort
        </button>
        <button type="button" className="btn btn-primary" onClick={onQuickSort}>
          Quick Sort
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onInsertionSort}
        >
          Insertion Sort
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSelectionSort}
        >
          Selection Sort
        </button>
      </div>

      <button type="button" className="btn btn-danger" onClick={onStop}>
        Stop
      </button>
    </div>
  );
}
