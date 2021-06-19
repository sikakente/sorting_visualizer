import Bar from "./Bar";

export default function BarArea(props) {
  const { bars } = props;
  return (
    <div className="container">
      <div className="row align-items-start">
        {bars.map((barNumber, index) => (
          <Bar key={index} barNumber={barNumber} />
        ))}
      </div>
    </div>
  );
}
