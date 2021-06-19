import styles from "./Bar.module.css";

export default function Bar(props) {
  const { barNumber } = props;
  return (
    <div className="col">
      <div className={`${styles.bar} array-bar`} style={{ height: `${barNumber * 10}px` }}>
        {barNumber}
      </div>
    </div>
  );
}
