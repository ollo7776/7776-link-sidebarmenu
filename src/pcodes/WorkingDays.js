import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function WorkingDays() {
    const [values, setValues] = useState({
        startDate: "",
        endDate: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            startDate: "2017-06-01",
            endDate: "2017-08-01"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.startDate && values.endDate) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.startDate);
        console.log(values.endDate);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
            }
    }

    useEffect(() => {
        if (submitted && valid) {
            console.log(values)
            let dataToSend = `{"start":${values.startDate}, "end":${values.endDate},"type":"com.reactcwqr.codewars.service.WorkingDaysService"}`
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(response.data + "")
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
                            <h1>How Many Working Days?</h1>
                            Give a start date and an end date to check how many working days is between<br />
                            Sample part of the code: <br />
                            start date: 2017, 6, 1<br />
                            start date: 2017, 8, 1<br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <input
                            name="startDate"
                            onChange={handleFirstCodeInputChange}
                            value={values.startDate}
                            className="form-inputs"
                            placeholder="type a start date"
                        />
                        <input
                            name="endDate"
                            onChange={handleFirstCodeInputChange}
                            value={values.endDate}
                            className="form-inputs"
                            placeholder="type an end date"
                        />
                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.startDate && !values.endDate ?
                                <p style={{ color: 'red' }}>No code is pasted</p>
                                : dataResp === 'Data is invalid' ?
                                    <p style={{ color: 'yellow' }}>Data is invalid</p>
                                    : <p style={{ color: 'green' }}>{dataResp} days</p>
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

export default WorkingDays;