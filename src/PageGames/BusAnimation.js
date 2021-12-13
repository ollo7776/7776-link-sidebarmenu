import React, { useState } from 'react'
import './BusAnimation.css'

export const BusAnimation = () => {
    const [moveStyle, setMoveStyle] = useState({
        animationPlayState: 'paused'
    })

    const startMove = () => {
        setMoveStyle({
            animationPlayState: 'running'
        })
    }
    const stopMove = () => {
        setMoveStyle({
            animationPlayState: 'paused'
        })
    }


    return (
        <>
            <div className="container" id="animation">
                Unsere besten Mitarbeiter verbessern die Qualität unserer Dienstleistungen.
                <div className="form-check form-check-inline">
                    <button className="form-check-input"
                        id="gas"
                        value="gas"
                        onClick={startMove}>Gas!
                    </button>
                    <button className="form-check-input" id="bremse" value="bremse" onClick={stopMove} >
                        Bremsen!!!
                    </button>
                </div>

                <div id="busStops">
                    <div id="busSignUp" style={moveStyle}>H</div>
                    <div id="bus" style={moveStyle}></div>
                    <div id="busWheelRear" style={moveStyle}></div>
                    <div id="busWheelFront" style={moveStyle}></div>
                    <div id="busMirror" style={moveStyle}></div>
                    <div id="road"></div>
                    <div id="busSign" style={moveStyle}></div>
                </div>
            </div>
        </>
    )
}
