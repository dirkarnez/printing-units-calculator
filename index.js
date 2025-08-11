const TextInputComponent = ({ from, to, formula }) => {
  const [ inputValue, setInputValue ] = React.useState(NaN);
  const [ outputValue, setOutputValue ] = React.useState(NaN);

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
      />
      <p>{outputValue}{to}</p>
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
      <TextInputComponent from="cm" to="pt" formula={value => value * (72 / 2.54) }/>
    </div>
  )
}
