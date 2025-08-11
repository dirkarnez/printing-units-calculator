const TextInputComponent = ({ from, to, formula }) => {
  const [ inputValue, setInputValue ] = React.useState("");
  const [ outputValue, setOutputValue ] = React.useState(0);
  
  React.useEffect(() => {
    setOutputValue(formula(inputValue));
  }, [ inputValue ]);
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text" placeholder={from}
        value={inputValue}
        onChange={handleChange}
      />{from}
      <p>{!isNaN(outputValue) ? outputValue : 0 }{to}</p>
    </div>
  );
};

function PrintingUnitsCalculator() {
  const [ data, setData ] = React.useState({});

  React.useEffect(() => {
  }, []);

  return (
    <div>
      <a href="https://github.com/dirkarnez/printing-units-calculator" target="_blank">
        printing-units-calculator
      </a>
      <br/>
      <TextInputComponent from="cm" to="pt" formula={value => Number(Number(value) * (72 / 2.54) ).toFixed(2)}/>
    </div>
  )
}
