import styles from "./ButtonBar.module.css";

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
    <div className={`container ${styles.buttonBar}`}>
      <div className="row justify-content-evenly">
        <div className="col">
          <button
            type="button"
            className="btn btn-dark"
            onClick={onGenerateBars}
          >
            Generate Arrays
          </button>
        </div>

        <div className="col-8">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onMergeSort}
            >
              Merge Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onQuickSort}
            >
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
        </div>

        <div className="col">
          <button type="button" className="btn btn-danger" onClick={onStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
