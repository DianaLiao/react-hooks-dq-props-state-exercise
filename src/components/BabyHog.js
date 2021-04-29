import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {

  const [babyWeight, setBabyWeight] = useState(3)

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"

    if (e.target.name === "+"){
      setBabyWeight(currentWeight => currentWeight + 1)
    }
    else if (e.target.name === "-") {
      setBabyWeight(currentWeight => currentWeight - 1)
    }

  }

  function resizePic(weight){
    return 200+weight
  }

  function eyeColorMapper(currentEyeColor){
    switch(currentEyeColor) {
      case "blue":
        return BlueBaby
        break;
      case "glowing":
        return GlowingBaby
        break;
      case "sun":
        return SunBaby
        break;
      default:
        return normalBaby
    }
    

  }

  return (
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      <h3>Weight:{babyWeight} lbs</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper(eyeColor)}
          style={{ height: `${resizePic(babyWeight)}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
