import React, { useEffect, useState } from 'react'
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg";
import axios from 'axios';

function Adivce() {

    const [advice, setAdvice] = useState("");

    const getAdivce = async() => {
            const response = await axios.get("	https://api.adviceslip.com/advice");
            const advice = await response.data.slip;
            setAdvice(advice)

    }

    useEffect(() => {
        getAdivce()
    }, []); 
  return (
    <div className='card'>
        <p>Adivce #1{advice.id}</p>
        <h2>“{advice.advice}”</h2>
        <img src={dividerDesktop} alt='divider' className='divider-desktop' />
        <img src={dividerMobile} alt='divider' className='divider-mobile' />
        <div className='dice' onClick={getAdivce}>
            <img src={dice} alt='dice' />
        </div>
    </div>
  )
}

export default Adivce;