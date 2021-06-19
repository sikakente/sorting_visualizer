import styles from "./Bar.module.css";

export default function Bar(props) {
  const { barNumber } = props;
  console.log(barNumber * 5);
  return (
    <div className="col">
      <div
        className={`${styles.bar} array-bar`}
        style={{ height: `${barNumber * 5}px` }}
      >
        {barNumber}
      </div>
    </div>
  );
}
