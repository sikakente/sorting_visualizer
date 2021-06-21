import styles from "./Bar.module.css";

export default function Bar(props) {
  const { barNumber } = props;
  return (
    <span
      className={`${styles.spanbar} array-bar`}
      style={{ height: `${barNumber * 5}px` }}
    >
      {barNumber}
    </span>
  );
}

/* <div className="col">
      <div
        className={`${styles.bar} array-bar`}
        style={{ height: `${barNumber * 5}px` }}
      >
        {barNumber}
      </div>
    </div> */
