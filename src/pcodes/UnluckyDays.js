import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function UnluckyDays() {
    const [values, setValues] = useState({
        sampleCode: "",
    });
    // const [clicked, setClicked] = useState(false)
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
            sampleCode: "2016"
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
            let dataToSend = `{"year":"${values.sampleCode}", "type":"com.reactcwqr.codewars.service.UnluckyDays"}`
            console.log(dataToSend)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(`There is ${response.data} unlucky day(s) in ${values.sampleCode}`)
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
                            <h1>Finde how many unclucky days is in a yaer</h1>
                            Your code!<br />
                            Sample part of the code:<br />
                            <span className="form-sample-data">
                                "2016"
                            <br />
                            </span>
                            <span>Sample answer from server:</span><br />
                            <span style={{ color: 'green' }}>" There is 1 unlucky day(s) in 2016"</span><br />
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