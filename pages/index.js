// import { useState } from "react";

// const EyebrowSlider = ({ id, name, config }) => {
//   const [values, setValues] = useState(config.map((item) => item.value));
//   const [dynamicValues, setDynamicValues] = useState("");

//   const handleChange = (index, value) => {
//     const newValues = [...values];
//     newValues[index] = parseInt(value);
//     setValues(newValues);

//     const path = document.querySelector(`#${id}`);
//     const [x1, y1, x2, y2, x3, y3] = newValues;
//     path.setAttribute("d", `M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`);
//     updateDynamicValues(newValues);
//   };

//   const updateDynamicValues = (newValues) => {
//     setDynamicValues(newValues.join(","));
//     console.log("dynamicValues", dynamicValues);
//   };

//   return (
//     <div className="slider-container" data-slider={id}>
//       {config.map((item, index) => (
//         <div key={index}>
//           <label htmlFor={`${id}-${item.name}`}>{`${item.name}:`}</label>
//           <input
//             id={`${id}-${item.name}`}
//             type="range"
//             min={item.min}
//             max={item.max}
//             value={values[index]}
//             onChange={(event) => handleChange(index, event.target.value)}
//           />
//         </div>
//       ))}
//       <style jsx>{`
//         .slider-container {
//           margin-bottom: 16px;
//         }
//       `}</style>
//     </div>
//   );
// };

// const Face = () => {
//   const [eyeballsX, setEyeballsX] = useState(0);
//   const [eyeballsY, setEyeballsY] = useState(0);
//   const [eyeballsSize, setEyeballsSize] = useState(0);

//   const handleEyeballsXChange = (event) => {
//     setEyeballsX(parseInt(event.target.value));
//   };

//   const handleEyeballsYChange = (event) => {
//     setEyeballsY(parseInt(event.target.value));
//   };

//   const handleEyeballsSizeChange = (event) => {
//     setEyeballsSize(parseInt(event.target.value));
//     const leftEyeball = document.getElementById("left-eyeball");
//     const rightEyeball = document.getElementById("right-eyeball");
//     leftEyeball.setAttribute("r", 6 + eyeballsSize);
//     rightEyeball.setAttribute("r", 6 + eyeballsSize);
//   };

//   return (
//     <div style={{display: "flex", flexDirection: "row"}}>
//       <div style={{width: "500px", height: "500px"}}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//           {/* Frame */}
//           <rect width="100" height="100" fill="#E15554" stroke="gold" strokeWidth="3" />
//           {/* Face */}
//           {/* <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="5" fill="#3BB273" /> */}
//           {/* <rect width="50" height="50" fill="#3BB273" /> */}
//           {/* Eyes */}
//           <circle id="left-eye" cx="35" cy="40" r="12" fill="#fff" stroke="#000" />
//           <circle id="right-eye" cx="65" cy="40" r="12" fill="#fff" stroke="#000" />
//           {/* eyeballs */}
//           <circle id="left-eyeball" cx={35 + eyeballsX} cy={40 + eyeballsY} r={6 + eyeballsSize} fill="#000" />
//           <circle id="right-eyeball" cx={65 + eyeballsX}
//             cy={40 + eyeballsY}
//             r={6 + eyeballsSize}
//             fill="#000"
//           />
//           {/* Mouth */}
//           <path
//             id="mouth"
//             d="M 30 70 Q 50 85 70 70"
//             stroke="#000"
//             strokeWidth="5"
//             fill="none"
//           />
//           {/* Eyebrows */}
//           <path
//             id="eyebrow1"
//             d="M 25 25 Q 40 30 45 30"
//             stroke="#000"
//             strokeWidth="5"
//             fill="none"
//           />

//           <path
//             id="eyebrow2"
//             d="M 76 25 Q 60 30 55 30"
//             stroke="#000"
//             strokeWidth="5"
//             fill="none"
//           />
//         </svg>
//       </div>
//       <div>
//         <div>
//           <label htmlFor="eyeballs-slider-x">Eyeballs X:</label>
//           <input
//             id="eyeballs-slider-x"
//             type="range"
//             min="-4"
//             max="4"
//             step="1"
//             value={eyeballsX}
//             onChange={handleEyeballsXChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="eyeballs-slider-y">Eyeballs Y:</label>
//           <input
//             id="eyeballs-slider-y"
//             type="range"
//             min="-4"
//             max="4"
//             step="1"
//             value={eyeballsY}
//             onChange={handleEyeballsYChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="eyeballs-size">Eyeballs Size:</label>
//           <input
//             id="eyeballs-size"
//             type="range"
//             min="-5"
//             max="2"
//             step="1"
//             value={eyeballsSize}
//             onChange={handleEyeballsSizeChange}
//           />
//         </div>
//         <div id="sliders">

//           <EyebrowSlider
//             id="mouth"
//             name="Mouth"
//             config={[
//               { name: "x1", min: 28, max: 40, value: 30 },
//               { name: "y1", min: 68, max: 84, value: 70 },
//               { name: "x2", min: 48, max: 52, value: 50 },
//               { name: "y2", min: 60, max: 87, value: 85 },
//               { name: "x3", min: 60, max: 72, value: 70 },
//               { name: "y3", min: 68, max: 82, value: 70 },
//             ]}
//           />
//           <EyebrowSlider
//             id="eyebrow1"
//             name="Eyebrow 1"
//             config={[
//               { name: "x1", min: 22, max: 30, value: 25 },
//               { name: "y1", min: 15, max: 25, value: 25 },
//               { name: "x2", min: 35, max: 40, value: 40 },
//               { name: "y2", min: 10, max: 30, value: 30 },
//               { name: "x3", min: 44, max: 46, value: 45 },
//               { name: "y3", min: 20, max: 30, value: 30 },
//             ]}
//           />
//            <EyebrowSlider
//             id="eyebrow2"
//             name="Eyebrow 2"
//             config={[
//               { name: "x1", min: 70, max: 80, value: 76 },
//               { name: "y1", min: 15, max: 25, value: 25 },
//               { name: "x2", min: 60, max: 65, value: 60 },
//               { name: "y2", min: 10, max: 30, value: 30 },
//               { name: "x3", min: 54, max: 56, value: 55 },
//               { name: "y3", min: 20, max: 30, value: 30 },
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   )
// };
// export default Face;

// import { useState } from "react";

// const EyebrowSlider = ({ id, name, config, onValuesChange }) => {
//   const [values, setValues] = useState(config.map((item) => item.value));

//   const handleChange = (index, value) => {
//     const newValues = [...values];
//     newValues[index] = parseInt(value);
//     setValues(newValues);

//     const path = document.querySelector(`#${id}`);
//     const [x1, y1, x2, y2, x3, y3] = newValues;
//     path.setAttribute("d", `M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`);

//     onValuesChange(id, newValues);
//   };

//   return (
//     <div className="slider-container" data-slider={id}>
//       {config.map((item, index) => (
//         <div key={index}>
//           <label htmlFor={`${id}-${item.name}`}>{`${item.name}:`}</label>
//           <input
//             id={`${id}-${item.name}`}
//             type="range"
//             min={item.min}
//             max={item.max}
//             value={values[index]}
//             onChange={(event) => handleChange(index, event.target.value)}
//           />
//         </div>
//       ))}
//       <style jsx>{`
//         .slider-container {
//           margin-bottom: 16px;
//         }
//       `}</style>
//     </div>
//   );
// };

// const Face = () => {
//   const [eyeballs, setEyeballs] = useState({ x: 0, y: 0, size: 0 });
//   const [dynamicValues, setDynamicValues] = useState({
//     eyebrow1: [],
//     eyebrow2: [],
//     leftEyeball: [],
//     rightEyeball: [],
//     mouth: [],
//   });

//   const onValuesChange = (id, newValues) => {
//     setDynamicValues((prevDynamicValues) => ({
//       ...prevDynamicValues,
//       [id]: newValues,
//     }));
//   };

//   const handleEyeballsChange = (property, value) => {
//     setEyeballs((prevEyeballs) => ({
//       ...prevEyeballs,
//       [property]: parseInt(value),
//     }));

//     if (property === "size") {
//       const leftEyeball = document.getElementById("left-eyeball");
//       const rightEyeball = document.getElementById("right-eyeball");
//       leftEyeball.setAttribute("r", 6 + eyeballs.size);
//       rightEyeball.setAttribute("r", 6 + eyeballs.size);
//     }
//   };

//   const dynamicValuesString = [
//     ...dynamicValues.eyebrow1,
//     ...dynamicValues.eyebrow2,
//     ...dynamicValues.leftEyeball,
//     ...dynamicValues.rightEyeball,
//     ...dynamicValues.mouth,
//   ].join(",");

//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <div style={{ width: "500px", height: "500px" }}>
//         {/* ... SVG content */}
//       </div>
//       <div>
//         {/* ... other sliders */}
//         <EyebrowSlider
//           id="mouth"
//           name="Mouth"
//           config={[
//             { name: "x1", min: 28, max: 40, value: 30 },
//             { name: "y1", min: 68, max: 84, value: 70 },
//             { name: "x2", min: 48, max: 52, value: 50 },
//             { name: "y2", min: 60, max: 87, value: 85 },
//             { name: "x3", min: 60, max: 72, value: 70 },
//             { name: "y3", min: 68, max: 82, value: 70 },
//           ]}
//           onValuesChange={onValuesChange}
//         />
//         <EyebrowSlider
//           id="eyebrow1"
//           name="Eyebrow 1"
//           config={[
//             { name: "x1", min: 22, max: 30, value: 25 },
//             { name: "y1", min: 15, max: 25, value: 25 },
//             { name: "x2", min: 35, max: 40, value: 40 },
//             { name: "y2", min: 10, max: 30, value: 30 },
//             { name: "x3", min: 44, max: 46, value: 45 },
//             { name: "y3", min: 20, max: 30, value: 30 },
//           ]}
//           onValuesChange={onValuesChange}
//         />
//         <EyebrowSlider
//           id="eyebrow2"
//           name="Eyebrow 2"
//           config={[
//             { name: "x1", min: 70, max: 80, value: 76 },
//             { name: "y1", min: 15, max: 25, value: 25 },
//             { name: "x2", min: 60, max: 65, value: 60 },
//             { name: "y2", min: 10, max: 30, value: 30 },
//             { name: "x3", min: 54, max: 56, value: 55 },
//             { name: "y3", min: 20, max: 30, value: 30 },
//           ]}
//           onValuesChange={onValuesChange}
//         />
//       </div>
//     </div>
//   );
// };
// export default Face;

import { useState, useEffect } from "react";
import Web3 from 'web3';
import contractABI from '../abi/main.json';
import { Typography, Slider as MuiSlider, Box, Button,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Tabs,} from "@mui/material";
// import {
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";



// const Slider = ({ id, name, config, onValuesChange }) => {
//   const [values, setValues] = useState(config.map((item) => item.value));

//   const handleChange = (index, value) => {
//     const newValues = [...values];
//     newValues[index] = parseInt(value);
//     setValues(newValues);
//     onValuesChange(id, newValues);
//   };

//   return (
//     <div>
//       <h4>{name}</h4>
//       {config.map((item, index) => (
//         <div key={index}>
//           <label htmlFor={`${id}-${item.name}`}>{`${item.name}:`}</label>
//           <input
//             id={`${id}-${item.name}`}
//             type="range"
//             min={item.min}
//             max={item.max}
//             value={values[index]}
//             onChange={(event) => handleChange(index, event.target.value)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
const Slider = ({ id, name, config, onValuesChange }) => {
  const [values, setValues] = useState(config.map((item) => item.value));

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);
    setValues(newValues);
    onValuesChange(id, newValues);
  };

  return (
    <Box sx={{p: 2}}>
      <Typography variant="h6">{name}</Typography>
      {config.map((item, index) => (
        <Box key={index}>
          <Typography id={`${id}-${item.name}`} variant="subtitle1">
            {`${item.name}:`}
          </Typography>
          <MuiSlider
            aria-labelledby={`${id}-${item.name}`}
            min={item.min}
            max={item.max}
            value={values[index]}
            onChange={(event, newValue) => handleChange(index, newValue)}
          />
        </Box>
      ))}
    </Box>
  );
};

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contractAddress = '0x707859dBfA8e79ff57763ba434f34F632dB40b11';
const contract = new web3.eth.Contract(contractABI, contractAddress);



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = [
  "#FFDC00", // yellow
  "#0074D9", // blue
  "#FF851B", // orange
  "#2ECC40", // green
  "#B10DC9", // purple
  "#FF4136", // red
];

function selectRandomColor() {
  return colors[getRandomInt(0, colors.length - 1)];
}

const Face = () => {

  const [tabIndex, setTabIndex] = useState(0);

const handleTabChange = (event, newValue) => {
  setTabIndex(newValue);
};


  const [rectFillColor, setRectFillColor] = useState("#FF4136");
  const [rectStrokeColor, setRectStrokeColor] = useState("#FF4136");

  const [dynamicValues, setDynamicValues] = useState({
    "eyebrow1": [25, 25, 40, 30, 45, 30],
    "eyebrow2": [76, 25, 60, 30, 55, 30],
    "left-eyeball": [0, 0, 6],
    "right-eyeball": [0, 0, 6],
    "mouth": [30, 70, 50, 85, 70, 70],
  });

  const handleValuesChange = (id, values) => {
    if (id === "eyeballs") {
      setDynamicValues((prevState) => ({
        ...prevState,
        "left-eyeball": values,
        "right-eyeball": values,
      }));
    } else {
      setDynamicValues((prevState) => ({
        ...prevState,
        [id]: values,
      }));
    }
  };

  const generateSeed = () => {
    let seed = "";
    ["eyebrow1", "eyebrow2", "left-eyeball", "right-eyeball", "mouth"].forEach((id) => {
      if (dynamicValues[id]) {
        if (id === "left-eyeball") {
          seed += (35 + dynamicValues[id][0]) + ",";
          seed += (40 + dynamicValues[id][1]) + ",";
          seed += dynamicValues[id][2] + ",";
        } else if (id === "right-eyeball") {
          seed += (65 + dynamicValues[id][0]) + ",";
          seed += (40 + dynamicValues[id][1]) + ",";
          seed += dynamicValues[id][2] + ",";
        } else {
          seed += dynamicValues[id].join(",") + ",";
        }
      }
    });
    return seed.slice(0, -1);
  };


  const [seed, setSeed] = useState(generateSeed());

  const randomSliderValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const handleRandomize = () => {
    // Generate random values for each slider and update the slider values
    const newEyebrow1Values = [
      randomSliderValue(22, 30),
      randomSliderValue(15, 25),
      randomSliderValue(35, 40),
      randomSliderValue(10, 30),
      randomSliderValue(44, 46),
      randomSliderValue(20, 30),
    ];
  
    const newEyebrow2Values = [
      randomSliderValue(70, 78),
      randomSliderValue(15, 25),
      randomSliderValue(60, 65),
      randomSliderValue(10, 30),
      randomSliderValue(54, 56),
      randomSliderValue(20, 30),
    ];
  
    const newEyeballsValues = [
      randomSliderValue(-4, 4),
      randomSliderValue(-4, 4),
      randomSliderValue(1, 7),
    ];
  
    const newMouthValues = [
      randomSliderValue(28, 40),
      randomSliderValue(68, 84),
      randomSliderValue(48, 52),
      randomSliderValue(60, 87),
      randomSliderValue(60, 72),
      randomSliderValue(68, 82),
    ];
  
    handleValuesChange('eyebrow1', newEyebrow1Values);
    handleValuesChange('eyebrow2', newEyebrow2Values);
    handleValuesChange('eyeballs', newEyeballsValues);
    handleValuesChange('mouth', newMouthValues);
  
    // Update the seed
    const newSeed = generateSeed();
    setSeed(newSeed);
  };

 
  const handleMint = async () => {
    let seed = generateSeed();
    console.log(seed);
    const accounts = await web3.eth.requestAccounts();
    console.log('hey', accounts);
    // const result = await contract.methods.mint().send({ from: accounts[0],value: web3.utils.toWei("0.0042", "ether") });
    const result = await contract.methods.safeMint(seed).send({ from: accounts[0], value: web3.utils.toWei("0.001", "ether") });
    console.log(result);
  };

  const getSvgValue = (id, index, defaultValue) => {
    if (dynamicValues[id]) {
      if (id === "left-eyeball" || id === "right-eyeball") {
        return defaultValue + dynamicValues[id][index];
      } else {
        return dynamicValues[id][index];
      }
    }
    return defaultValue;
  };

  const changeColors = () => {
    setRectFillColor(selectRandomColor());
    setRectStrokeColor(selectRandomColor());
  };


  return (
    <Container>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Eyebrow 1" />
        <Tab label="Eyebrow 2" />
        <Tab label="Eyes" />
        <Tab label="Mouth" />
      </Tabs>
      {tabIndex === 0 && (
        <Slider
          id="eyebrow1"
          name="Eyebrow 1"
          config={[
                    { name: "x1", min: 22, max: 30, value: 25 },
                    { name: "y1", min: 15, max: 25, value: 25 },
                    { name: "x2", min: 35, max: 40, value: 40 },
                    { name: "y2", min: 10, max: 30, value: 30 },
                    { name: "x3", min: 44, max: 46, value: 45 },
                    { name: "y3", min: 20, max: 30, value: 30 },
                  ]}
          onValuesChange={handleValuesChange}
        />
      )}
      {tabIndex === 1 && (
        <Slider
          id="eyebrow2"
          name="Eyebrow 2"
          config={[
                    { name: "x1", min: 70, max: 78, value: 76 },
                    { name: "y1", min: 15, max: 25, value: 25 },
                    { name: "x2", min: 60, max: 65, value: 60 },
                    { name: "y2", min: 10, max: 30, value: 30 },
                    { name: "x3", min: 54, max: 56, value: 55 },
                    { name: "y3", min: 20, max: 30, value: 30 },
                  ]}
          onValuesChange={handleValuesChange}
        />
      )}
      {tabIndex === 2 && (
        <Slider
          id="eyeballs"
          name="Eyes"
          config={[
            { name: "x", min: -4, max: 4, value: 0 },
            { name: "y", min: -4, max: 4, value: 0 },
            { name: "size", min: 1, max: 7, value: 6 },
          ]}
          onValuesChange={handleValuesChange}
        />
      )}
      {tabIndex === 3 && (
        <Slider
          id="mouth"
          name="Mouth"
          config={[
            { name: "x1", min: 28, max: 40, value: 30 },
            { name: "y1", min: 68, max: 84, value: 70 },
            { name: "x2", min: 48, max: 52, value: 50 },
            { name: "y2", min: 60, max: 87, value: 85 },
            { name: "x3", min: 60, max: 72, value: 70 },
            { name: "y3", min: 68, max: 82, value: 70 },
          ]}
          onValuesChange={handleValuesChange}
        />
      )}
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
         <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 100 100">
           {/* Frame */}
           <rect width="100" height="100" fill={rectFillColor} stroke={rectStrokeColor} strokeWidth="3" />
           {/* Face */}
           {/* <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="5" fill="#3BB273" /> */}
           {/* Eyes */}

           <circle id="left-eye" cx="35" cy="40" r="12" fill="#fff" stroke="#000" />
           <circle id="right-eye" cx="65" cy="40" r="12" fill="#fff" stroke="#000" />
           {/* <circle 
           id="left-color-eye" 
           cx={35 + getSvgValue("left-eyeball", 0, 0)} 
           cy={40 + getSvgValue("left-eyeball", 1, 0)} 
           r={2+ getSvgValue("left-eyeball", 2, 0)} 
           fill="#cde9f6" 
         />
         <circle
           id="right-color-eye" 
           cx={65 + getSvgValue("right-eyeball", 0, 0)} 
           cy={40 + getSvgValue("right-eyeball", 1, 0)} 
           r={2+ getSvgValue("right-eyeball", 2, 0)} 
           fill="#cde9f6" 
         /> */}
           {/* Eyeballs */}
           <circle
             id="left-eyeball"
             cx={35 + getSvgValue("left-eyeball", 0, 0)}
             cy={40 + getSvgValue("left-eyeball", 1, 0)}
             r={getSvgValue("left-eyeball", 2, 0)}
             fill="#000"
           />
           <circle
             id="right-eyeball"
             cx={65 + getSvgValue("right-eyeball", 0, 0)}
             cy={40 + getSvgValue("right-eyeball", 1, 0)}
             r={getSvgValue("right-eyeball", 2, 0)}
             fill="#000"
           />
           {/* Mouth */}
           <path
             id="mouth"
             d={`M ${getSvgValue("mouth", 0, 30)} ${getSvgValue("mouth", 1, 70)} Q ${getSvgValue("mouth", 2, 50)} ${getSvgValue("mouth", 3, 85)} ${getSvgValue("mouth", 4, 70)} ${getSvgValue("mouth", 5, 70)}`}
             stroke="#000"
             strokeWidth="5"
             fill="none"
           />
           {/* Eyebrows */}
           <path
             id="eyebrow1"
             d={`M ${getSvgValue("eyebrow1", 0, 25)} ${getSvgValue("eyebrow1", 1, 25)} Q ${getSvgValue("eyebrow1", 2, 40)} ${getSvgValue("eyebrow1", 3, 30)} ${getSvgValue("eyebrow1", 4, 45)} ${getSvgValue("eyebrow1", 5, 30)}`}
             stroke="#000"
             strokeWidth="5"
             fill="none"
           />
           <path
             id="eyebrow2"
             d={`M ${getSvgValue("eyebrow2", 0, 76)} ${getSvgValue("eyebrow2", 1, 25)} Q ${getSvgValue("eyebrow2", 2, 60)} ${getSvgValue("eyebrow2", 3, 30)} ${getSvgValue("eyebrow2", 4, 55)} ${getSvgValue("eyebrow2", 5, 30)}`}
             stroke="#000"
             strokeWidth="5"
             fill="none"
           />
         </svg>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="secondary"
        onClick={changeColors}
      >
        Change Background
      </Button>
    </Grid>
    <Grid item xs={12}>
    {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}> */}
      <Button variant="contained" color="primary" onClick={handleRandomize}>
        Random Expression
      </Button>
      {/* <Typography variant="h6">Seed: {seed}</Typography> */}
    {/* </Box> */}
    </Grid>
    <Grid item xs={12} sx={{pb: 5}}>
      <Button variant="contained" color="primary" onClick={handleMint}>
        Mint
      </Button>
    </Grid>
    {/* <Grid item xs={12}>
      <Typography variant="h6">Seed: {generateSeed()}</Typography>
    </Grid> */}
  </Grid>
</Container>
    // <div style={{ display: "flex", flexDirection: "row" }}>
    //   <div style={{ display: "flex", flexDirection: "column" }}>
    //   <div style={{ maxWidth: "600px", display: "flex", flexDirection: "row" }}>
    //     <Slider
    //       id="eyebrow1"
    //       name="Eyebrow 1"
    //       config={[
    //         { name: "x1", min: 22, max: 30, value: 25 },
    //         { name: "y1", min: 15, max: 25, value: 25 },
    //         { name: "x2", min: 35, max: 40, value: 40 },
    //         { name: "y2", min: 10, max: 30, value: 30 },
    //         { name: "x3", min: 44, max: 46, value: 45 },
    //         { name: "y3", min: 20, max: 30, value: 30 },
    //       ]}
    //       onValuesChange={handleValuesChange}
    //     />
    //     {/* Add other sliders for other parts */}
    //     <Slider
    //       id="eyebrow2"
    //       name="Eyebrow 2"
    //       config={[
    //         { name: "x1", min: 70, max: 78, value: 76 },
    //         { name: "y1", min: 15, max: 25, value: 25 },
    //         { name: "x2", min: 60, max: 65, value: 60 },
    //         { name: "y2", min: 10, max: 30, value: 30 },
    //         { name: "x3", min: 54, max: 56, value: 55 },
    //         { name: "y3", min: 20, max: 30, value: 30 },
    //       ]}
    //       onValuesChange={handleValuesChange}
    //     />

    //     <Slider
    //       id="eyeballs"
    //       name="Eyeballs"
    //       config={[
    //         { name: "x", min: -4, max: 4, value: 0 },
    //         { name: "y", min: -4, max: 4, value: 0 },
    //         { name: "size", min: 1, max: 7, value: 6 },
    //       ]}
    //       onValuesChange={handleValuesChange}
    //     />
    //     <Slider
    //       id="mouth"
    //       name="Mouth"
    //       config={[
    //         { name: "x1", min: 28, max: 40, value: 30 },
    //         { name: "y1", min: 68, max: 84, value: 70 },
    //         { name: "x2", min: 48, max: 52, value: 50 },
    //         { name: "y2", min: 60, max: 87, value: 85 },
    //         { name: "x3", min: 60, max: 72, value: 70 },
    //         { name: "y3", min: 68, max: 82, value: 70 },
    //       ]}
    //       onValuesChange={handleValuesChange}
    //     />
    //   </div>
    //   <div>
    //       <button onClick={changeColors}>Change Background</button>
    //     </div>
    //   </div>
    //   <div style={{ height: "500px", width: "500px" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    //       {/* Frame */}
    //       <rect width="100" height="100" fill={rectFillColor} stroke={rectStrokeColor} strokeWidth="3" />
    //       {/* Face */}
    //       {/* <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="5" fill="#3BB273" /> */}
    //       {/* Eyes */}

    //       <circle id="left-eye" cx="35" cy="40" r="12" fill="#fff" stroke="#000" />
    //       <circle id="right-eye" cx="65" cy="40" r="12" fill="#fff" stroke="#000" />
    //       {/* <circle 
    //       id="left-color-eye" 
    //       cx={35 + getSvgValue("left-eyeball", 0, 0)} 
    //       cy={40 + getSvgValue("left-eyeball", 1, 0)} 
    //       r={2+ getSvgValue("left-eyeball", 2, 0)} 
    //       fill="#cde9f6" 
    //     />
    //     <circle
    //       id="right-color-eye" 
    //       cx={65 + getSvgValue("right-eyeball", 0, 0)} 
    //       cy={40 + getSvgValue("right-eyeball", 1, 0)} 
    //       r={2+ getSvgValue("right-eyeball", 2, 0)} 
    //       fill="#cde9f6" 
    //     /> */}
    //       {/* Eyeballs */}
    //       <circle
    //         id="left-eyeball"
    //         cx={35 + getSvgValue("left-eyeball", 0, 0)}
    //         cy={40 + getSvgValue("left-eyeball", 1, 0)}
    //         r={getSvgValue("left-eyeball", 2, 0)}
    //         fill="#000"
    //       />
    //       <circle
    //         id="right-eyeball"
    //         cx={65 + getSvgValue("right-eyeball", 0, 0)}
    //         cy={40 + getSvgValue("right-eyeball", 1, 0)}
    //         r={getSvgValue("right-eyeball", 2, 0)}
    //         fill="#000"
    //       />
    //       {/* Mouth */}
    //       <path
    //         id="mouth"
    //         d={`M ${getSvgValue("mouth", 0, 30)} ${getSvgValue("mouth", 1, 70)} Q ${getSvgValue("mouth", 2, 50)} ${getSvgValue("mouth", 3, 85)} ${getSvgValue("mouth", 4, 70)} ${getSvgValue("mouth", 5, 70)}`}
    //         stroke="#000"
    //         strokeWidth="5"
    //         fill="none"
    //       />
    //       {/* Eyebrows */}
    //       <path
    //         id="eyebrow1"
    //         d={`M ${getSvgValue("eyebrow1", 0, 25)} ${getSvgValue("eyebrow1", 1, 25)} Q ${getSvgValue("eyebrow1", 2, 40)} ${getSvgValue("eyebrow1", 3, 30)} ${getSvgValue("eyebrow1", 4, 45)} ${getSvgValue("eyebrow1", 5, 30)}`}
    //         stroke="#000"
    //         strokeWidth="5"
    //         fill="none"
    //       />
    //       <path
    //         id="eyebrow2"
    //         d={`M ${getSvgValue("eyebrow2", 0, 76)} ${getSvgValue("eyebrow2", 1, 25)} Q ${getSvgValue("eyebrow2", 2, 60)} ${getSvgValue("eyebrow2", 3, 30)} ${getSvgValue("eyebrow2", 4, 55)} ${getSvgValue("eyebrow2", 5, 30)}`}
    //         stroke="#000"
    //         strokeWidth="5"
    //         fill="none"
    //       />
    //     </svg>
    //   </div>
    //   <div>
    //     {/* <button onClick={mintFace(generateSeed())}>Randomize</button> */}
    //     <button onClick={handleMint}>Mint</button>
    //     <h4>Seed: {generateSeed()}</h4>
    //   </div>
    // </div>
  );
}

export default Face;
