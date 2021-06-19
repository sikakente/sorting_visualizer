export default function ButtonBar(props) {
  const { onGenerateBars, onMergeSort } = props;
  return (
    <nav className="nav">
      <button type="button" className="btn btn-danger" onClick={onGenerateBars}>
        Generate Arrays
      </button>
      <button type="button" className="btn btn-primary" onClick={onMergeSort}>
        Merge Sort
      </button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
    </nav>
  );
}
