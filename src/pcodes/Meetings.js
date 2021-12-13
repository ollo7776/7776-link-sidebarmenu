import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function DecodeQrCode() {
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
            sampleCode: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
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
            let dataToSend = `{"list":"${values.sampleCode}", "type":"com.reactcwqr.codewars.service.Meetings"}`
            console.log(dataToSend)
                axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(response.data)
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
                            <h1>Meetings</h1>
                            Your code!<br />
                            Sample part of the code:<br />
                            <span className="form-sample-data">
                                "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;
                                <br/>Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
                            <br />
                            </span>
                            <span>Sample answer from server:</span>
                                <span style={{ color: 'green' }}>"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"</span><br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <textarea
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

export default DecodeQrCode;