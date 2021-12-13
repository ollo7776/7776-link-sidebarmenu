import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function Validate24() {
    const [values, setValues] = useState({
        firstCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = event => {
        setValues({
            ...values,
            firstCode: event.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            firstCode: "13:03"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstCode) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.firstCode);
    }

    let headerOption = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            let dataToSend = `{"time":"${values.firstCode}","type":"com.reactcwqr.codewars.service.Regex24HoursService"}`
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then(function (response) {
                    setDataResp(response.data + "")
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Daten sind ungültig: " + error)
                })
        }
    });

    return (
        <div className="form-container">
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor="firstCode"
                            className="form-label">
                            <h1>Validate 24 Hours</h1>
                            Your code!<br />
                            Sample part of the code: 13:03<br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <input
                            onChange={handleFirstCodeInputChange}
                            value={values.firstCode}
                            className="form-inputs"
                            placeholder="type the hour to check..."
                            name="firstCode"
                        />
                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.firstCode ?
                                <p style={{ color: 'red' }}>No code is pasted</p>
                                : dataResp === 'false' ?
                                    <p style={{ color: 'yellow' }}>false</p>
                                    : dataResp === 'true' ?
                                        <p style={{ color: 'green' }}>true</p>
                                        : <p style={{ color: 'red' }}></p>
                        }
                    </div>
                    <button className="form-input-btn"
                        type='submit'>
                        Submit and send to server
                </button>
                </form>
            </div>
        </div>


    )
}

export default Validate24;