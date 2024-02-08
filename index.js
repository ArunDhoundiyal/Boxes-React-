const Box = (props) => {
  const { box } = props;
  return (
    <div className={box}>
      <p>{box}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="top-heading">Boxes</h1>
    <div className="card-container">
      <Box box="Small" />
      <Box box="Medium" />
      <Box box="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
