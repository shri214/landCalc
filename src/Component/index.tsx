import React, { useState, ChangeEvent } from "react";
import "./style.css";

export const LandConverter: React.FC = () => {
  const [result, setResult] = useState({ num1: 0, num2: 0 });

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  const calculateResult = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseFloat(event.target.value);
    let acres = 0;
    let Guntas = 0;

    if (selectedValue === "Hectare") {
      if (!isNaN(inputValue) && inputValue >= 0) {
        let acreResult = inputValue * 2.47105;
        if (acreResult > 1) {
          acres = parseInt(acreResult.toString());
          const dec = acreResult - acres;
          Guntas = dec * 40;
        }else{
          Guntas=acreResult*40
        }
      }
    } else if(selectedValue==="Acre") {
      acres = parseInt(inputValue.toString());
      let decimalNum = inputValue - acres;
      Guntas = decimalNum * 40;
    }

    setResult({
      num1: acres !== undefined && !isNaN(acres) ? acres : 0,
      num2: Guntas !== undefined && !isNaN(Guntas) ? Guntas : 0,
    });
  };

 

  return (
    <div className="dashboard">
      <div className="calculator-dashboard">
        <h1 className="heading">Land Converter Hectare to Acre-Guntas</h1>
        <div className="inputField">
          <select name="convertor" id="con" onChange={handleSelectChange}>
            <option value="select">select</option>
            <option value="Hectare">Hectare</option>
            <option value="Acre">Acre</option>
          </select>
          <input
            type="number"
            placeholder="Enter land in Hectare"
            onChange={calculateResult}
          />
        </div>
        <div className="results">
          <p>Acre: {result.num1}</p>
          <p>Guntas: {result.num2}</p>
        </div>
      </div>
    </div>
  );
};
