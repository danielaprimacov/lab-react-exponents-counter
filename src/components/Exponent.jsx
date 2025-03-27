const Exponent = ({ number, exponent }) => {
  const result = number ** exponent;

  const multiplicationExpression = Array(exponent).fill(number).join(" * ");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {number}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationExpression} = <span className="total">{result}</span>
      </p>
    </div>
  );
};
export default Exponent;
