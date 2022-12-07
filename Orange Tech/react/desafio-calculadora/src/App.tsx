import {useState} from 'react';
import {Container,Content, ButtonGrid } from "./page-style";
import GlobalStyle from "./globalStyle";
import Button from "./components/Buttons/button-component";
import Input from "./components/Input/input-component";


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num:string) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {
    //console.log(currentNumber, firstNumber);
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      //setCurrentNumber('0');
      setOperation('+');
    }else{
      const operation = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(operation));
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const operation = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(operation));
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }
    else{
      const operation = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(operation));
    }
  }
  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }
    else{
      const operation = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(operation));
    }
  }

  const handlePercentNumbers = () => {
      setOperation('%');
      const operation = Number(currentNumber) / 100 ;
      setCurrentNumber(String(operation));

  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){

      switch (operation) {
        case "+":
          handleSumNumbers();
          setOperation('');
          break;
        
        case "-":
          handleMinusNumbers();
          setOperation('');
          break;
        
        case "/":
          handleDivisionNumbers();
          setOperation('');
          break;

        case "*":
          handleMultiplyNumbers();
          setOperation('');
          break;

        case "%":
          handleMultiplyNumbers();
          setOperation('');
          break;
      
        default:
          break;
      }
      //setFirstNumber(String(currentNumber));
      //setCurrentNumber('0');

    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
        <Input value={currentNumber} />
        <ButtonGrid>
          <Button label="" onClick={() => handleAddNumber('')} />
          <Button label="AC" onClick={handleOnClear} />
          <Button label="%" onClick={handlePercentNumbers} />
          <Button label="/" onClick={handleDivisionNumbers} />
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={handleMultiplyNumbers} />
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="del" onClick={() => handleAddNumber('')} />
          <Button label="=" onClick={handleEquals} />
        </ButtonGrid>

        </Content>
      </Container>
    </>
  );
}

export default App;
