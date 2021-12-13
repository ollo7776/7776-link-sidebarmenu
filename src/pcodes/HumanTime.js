import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function HumanTime() {
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
            firstCode: "13:15"
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
            'Content-Type': 'application/json',
            }
    }

    useEffect(() => {
        if (submitted && valid) {
            let dataToSend = `{"time":"${values.firstCode}","type":"com.reactcwqr.codewars.service.WhatTimeIsItService"}`
            console.log(dataToSend)
            //axios.post('http://localhost:8081/default', dataToSend, headerOption)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then(function (response) {
                    setDataResp(response.data + "")
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Data is invalid: " + error)
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
                            <h1>Human Readable Digit Hour Time</h1>
                            Change the digit hour time to proper english, paste your code!<br />
                            Sample part of the code: 13:15<br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <input
                            onChange={handleFirstCodeInputChange}
                            value={values.firstCode}
                            className="form-inputs"
                            placeholder="type the hour to change into proper english"
                            name="firstCode"
                        />
                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.firstCode ?
                                <p style={{ color: 'red' }}>No code is pasted</p>
                                : dataResp === 'Data is invalid' ?
                                    <p style={{ color: 'yellow' }}>Data is invalid</p>
                                    : <p style={{ color: 'green' }}>{dataResp}</p>
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

export default HumanTime;