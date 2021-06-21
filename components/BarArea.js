import Bar from "./Bar";
import styles from "./BarArea.module.css";

export default function BarArea(props) {
  const { bars } = props;
  return (
    <div className="container">
      <div className={`col ${styles.bararea}`}>
        {bars.map((barNumber, index) => (
          <Bar key={index} barNumber={barNumber} />
        ))}
      </div>
    </div>
  );
}

//<div className={`row align-items-start ${styles.bararea}`}>
