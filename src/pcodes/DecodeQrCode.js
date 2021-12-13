import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL.js'

function DecodeQrCode() {
    const [values, setValues] = useState({
        firstCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = e => {
        setValues({
            ...values,
            firstCode: e.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            firstCode: '[[1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],[1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1],[1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1],[1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1],[0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1],[0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1],[0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0],[1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0],[1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1],[1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0],[1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1],[1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0],[1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1]]'
        })
    }

    const handleSubmit = e => {
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
            let dataToSend = `{"qrcode":${values.firstCode}, "type":"com.reactcwqr.codewars.service.QrCodeService"}`

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
                            <h1>Decode QR code!</h1>
                            Your code!<br />
                            Sample part of the code:<br />
                            <span className="form-sample-data"> int[][] qrcode = new int[][]<br />&#123;&#123;1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 &#125;,<br />
                                  &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                  &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 &#125;,<br />
                                  &#123;1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 &#125;,<br />
                                  &#123;0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 &#125;,<br />
                                  &#123;0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1 &#125;,<br />
                                  &#123;1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1 &#125;,<br />
                                  &#123;1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1 &#125;,<br />
                                  &#123;1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0 &#125;,<br />
                                  &#123;1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 &#125;,<br />
                                  &#123;0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0 &#125;,<br />
                                  &#123;1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1 &#125;,<br />
                                  &#123;1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0 &#125;,<br />
                                  &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 &#125;,<br />
                                  &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0 &#125;,<br />
                                  &#123;1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1 &#125;&#125;;<br />

      it Schould equals: "Hello"<br /></span>
                        </label>
                        <button className="form-input-btn"
                            onClick={CopyToInputField}>
                            Copy sample code
                </button>
                        <input
                            onChange={handleFirstCodeInputChange}
                            value={values.firstCode}
                            className="form-inputs"
                            placeholder='paste your QR code as a multi array'
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

export default DecodeQrCode;