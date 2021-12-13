import React, { useState, useEffect } from 'react'
import './Spielchen.css'
import { useAnimate } from 'react-simple-animate'

function Spielchen() {

//     const [animation, setAnimation] = useState(0)
//     const toggle = props.toggle
// useEffect(()=> {
//     renderAnimations()
// }, [toggle])

// const moveUp = () => {
//     return toggle ? rocket : rocketUp
// }

// const renderAnimations = ()=> {
//     return toggle? setAnimation(1):setAnimation(0)
// }
        
        return (
            <div style={{ margin: 100 }}>
                {/* <h1>
            <a href='https://i7776.net/javaApps/pimkkong.html'>Click to start a game!!!</a>
            </h1> */}
                <div id="ball" ></div>
                <div id='rocket'></div>
                {/* <div id='rocket' onClick={()=>props.handleClick()} animation={animation}></div> */}
                <div id="field"></div>
                {/* <div className="box" style={style} /> */}
                <button onClick={useAnimationExample}>up</button>

                <button>down</button>
            </div>
        )
    }

     export const useAnimationExample = () => {
        const {style, play } = useAnimate({
            start: {opacity: 0}, end: {opacity: 1}
        })
        useEffect(()=> play(true), [])
        return <div style={style}>useAnimate</div>
    }


export default Spielchen;
