import React, { useState } from 'react'
import './LoginForm.css'

function Cookies() {
    const [showModal, setShowModal] = useState(true)

    return (
        <>
            <div className={`popup-cookies ${showModal ? 'active' : ''}`}>
                <div className={`popup-text ${showModal ? 'active' : ''}`}
                ><h4>COOKIES, love to eat it :)</h4><img src='/picture/cookie.jpg' alt='cookie'></img>
        ...Für die Seite, auf der Sie sich befinden, müssen keine Cookies akzeptiert werden. Wir speichern nur die Daten, die für die Funktion der Website erforderlich sind. Sie haben das Recht zu bestätigen oder abzulehnen. Wir verfolgen niemanden und speichern keine sensiblen Daten. Ich glaube, es ist besser, kleine Cookies zu essen, als sich an alle zu erinnern.
       <br /> <div className={`popup-button ${showModal ? 'active' : ''}`}
                    onClick={() => setShowModal((showModal) => !showModal)}
                >OK</div>
                <div className={`popup-button ${showModal ? 'active' : ''}`}
                    onClick={() => setShowModal((showModal) => !showModal)}
                >Ablehnen</div>
                <div className={`popup-button ${showModal ? 'active' : ''}`}
                    onClick={() => setShowModal((showModal) => !showModal)}
                >essen...</div>
        </div>
                
            </div>



        </>
    )
}

export default Cookies;
