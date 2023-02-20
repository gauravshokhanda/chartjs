import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./styles.css";

const Stock1 = {
  labels: ["Red", "Blue","test","rahul","harsh","hars","gaurav"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 19,20,7,3,8,14,],
      backgroundColor: "blue"
    }
  ]
}

const Stock2 = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 19],
      backgroundColor: "green"
    },
    {
      label: "Failure Count",
      stack: "Stack 0",
      data: [6, 2],
      backgroundColor: "red"
    }
  ]
}

const stock3 = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 19],
      backgroundColor: "green"
    },
    {
      label: "Failure Count",
      stack: "Stack 0",
      data: [6, 2],
      backgroundColor: "red"
    }
  ]
}


const options = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};



function App() {
  const [stock,setStock]= useState()
const [age, setAge] = useState('');

const handleChange = (event) => {
  setAge(event.target.value);
  setStock(event.target.value)
};
console.log(stock,"stocks")

  return (
    <div className="App">
      <h1>ChartJS Sandbox</h1>
      <Box sx={{ml:20,mr:20}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stocks</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Stock"
          onChange={handleChange}
        >
          <MenuItem value={Stock1}>Stock1</MenuItem>
          <MenuItem value={Stock2}>Stock2</MenuItem>
          <MenuItem value={stock3}>Stock3</MenuItem>
        </Select>
      </FormControl>
      <Bar data={stock} options={options} />
      </Box>
   
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
