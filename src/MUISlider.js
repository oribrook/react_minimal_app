import React from "react";
import Slider from "@mui/material/Slider";

export default function MUISlider(props) {
  const [slideValue, setSlideValue] = React.useState(0);
  return (
    <Slider
      min={0}
      max={255}
      value={slideValue}
      onChange={(e) => {
        setSlideValue(e.target.value);
        console.log(e.target.value);
        props.onChange && props.onChange(e.target.value) 
      }}
      valueLabelDisplay="auto"
    />
  );
}
