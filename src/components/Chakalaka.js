import { useState } from "react";

const Chakalaka = () => {

    const [color, setColor] = useState("red")
    
    const change_color = () => {
        if (color == 'red') {
            setColor('blue')
        } else {
            setColor('red')
        }            
    }

    return (
        <button id='button_id'
            onClick={change_color} style={{background: color}}> PRESS HERE
        </button>
    )
};

export default Chakalaka