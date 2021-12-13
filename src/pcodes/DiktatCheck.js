import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'

function DiktatCheck() {
    const [values, setValues] = useState({
        text1: "",
        text2: ""
    })

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
            text1: "",
            text2: "",
        })
        setValues({
            text1: "C'est Ala a un chat",
            text2: "C'est Ala a un chat",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       values.text1 = values.text1.replace(/'/g, "*")
       values.text2 = values.text2.replace(/'/g, "*")
        console.log(values.text1)
        if (values.text1 && values.text2) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.text1);
        console.log(values.text2);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            console.log(values)
            let dataToSend = `{"text1":'${values.text1}', "text2":'${values.text2}',"type":"com.reactcwqr.codewars.service.DiktatCheck"}`
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    // console.log(response.data)
                    setDataResp(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Data is invalid: " + error)
                })
        }
    })

    return (
        <div className="form-container">
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor="firstCode"
                            className="form-label">
                            <h1>Diktat Check:</h1>
                            Vérifiez si les deux textes sont identiques:<br />
                            text1 ?= text2<br />
                            <br />
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <textarea rows='5'
                            name="text1"
                            onChange={handleFirstCodeInputChange}
                            value={values.text1}
                            className="form-inputs"
                            placeholder="text1"
                        />
                        <textarea rows='5'
                            name="text2"
                            onChange={handleFirstCodeInputChange}
                            value={values.text2}
                            className="form-inputs"
                            placeholder="text2"
                        />
                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.text1 && !values.text2 ?
                                <p style={{ color: 'red' }}>No code is pasted</p>
                                : dataResp === 'Data is invalid' ?
                                    <p style={{ color: 'yellow' }}>Data is invalid</p>
                                    // : <p style={{ color: 'green' }}>{dataResp}</p>
                                    : <div style={{ color: 'green' }}>                                       
                                        {dataResp.toString().split('newLine').map((item, index) => {
                                                    console.log(item)
                                                    return (
                                                        <div key={index}>
                                                            {item}
                                                        </div>
                                                    )
                                                })}
                                    </div>
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

export default DiktatCheck;