import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL.js'

function UnluckyDays() {
    const [values, setValues] = useState({
        sampleCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = e => {
        setValues({
            ...values,
            sampleCode: e.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            sampleCode: "2021-04-01"
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (values.sampleCode) {
            setValid(true);
        }
        setSubmitted(true);
        //console.log(values.sampleCode);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            //here have to set the name of a variable/s and change the ending of the type link for the name of class in java backend
            let dataToSend = `{"date":"${values.sampleCode}", "type":"com.reactcwqr.codewars.service.CalendarWeek"}`
            console.log(dataToSend)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(`it's a ${response.data}th calendar week`)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp('Data is invalid: ' + error)
                })
        }
    });

    return (
        <div className="form-container">
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    {/* {submitted && valid ? <Success /> : <h1>Paste your code!</h1>} */}
                    {/* {submitted && valid ? `<p>Well well well</p>${dataResp}` : <h1>Paste your code!</h1>} */}
                    <div className="form-inputs">
                        <label htmlFor="firstCode"
                            className="form-label">
                            <h1>which calendar week are we in?</h1>
                            Your code!<br />
                            Sample part of the code:<br />
                            <span className="form-sample-data">
                                "2021-04-01"
                            <br />
                            </span>
                            <span>Sample answer from server:</span>
                            <span style={{ color: 'green' }}>" 13"</span><br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <input
                            onChange={handleFirstCodeInputChange}
                            value={values.sampleCode}
                            className="form-inputs"
                            placeholder='paste your list of names'
                            name="sampleCode"
                        />
                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.sampleCode ?
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

export default UnluckyDays;