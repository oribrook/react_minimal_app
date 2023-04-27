import React, { useEffect, useState } from "react";
import MUISlider from "../MUISlider";

function Home() {
  const [bgColorR, setBgColorR] = useState(255);
  const [bgColorG, setBgColorG] = useState(255);
  const [bgColorB, setBgColorB] = useState(255);

  useEffect(() => {
    document.body.style.backgroundColor = `rgb(${bgColorR}, ${bgColorG}, ${bgColorB})`

  }, [bgColorR, bgColorG, bgColorB]);

  // todo: save info into cookie

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "50px" }}>
        דף הבית
        <MUISlider onChange={setBgColorR} />
        <MUISlider onChange={setBgColorG} />
        <MUISlider onChange={setBgColorB} />
      </div>
    </>
  );
}

export default Home;
