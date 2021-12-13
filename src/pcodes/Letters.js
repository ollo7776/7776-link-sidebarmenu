import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../components/useURL'
import { motion, useAnimation } from 'framer-motion'

function Letters() {
    const [values, setValues] = useState({
        letters: "",
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const controls = useAnimation()

    // const variants = {
    //     visible: (i) => (
    //         {
    //             rotate: [-360, 0, -360],
    //             transition: {
    //                 delay: i + 0.3,
    //                 type: "spring",
    //                 damping: 10,
    //                 mass: 0.75,
    //                 stiffness: 100
    //             }
    //         })
    // }

    // const variants = {
    //     visible: {
    //         rotate: [-360, 0, -360],
    //         transition: {
    //             // delay: 3,
    //             type: "spring",
    //             damping: 10,
    //             mass: 0.75,
    //             stiffness: 100
    //         }
    //     }
    // }
    const styleMo = {
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 4
    }

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
            letters: "",
        })
        setValues({
            letters: "literak",
        })
    }
    const EmptyField = e => {
        e.preventDefault()
        setValues({
            letters: "",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        controls.start(i => ({
            opacity: [0, 1],
            rotate: [-360, 0, 360],
            //x: 100,
            transition: { delay: i * 0.5, duration: 3 },
        })
        )
        //controls.start('visible')
        //console.log(values.letters)
        if (values.letters) {
            setValid(true);
        }
        setSubmitted(true);
        //  console.log(values.letters);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            //values.letters = values.letters.toLocaleLowerCase()
            // console.log(values)
            let dataToSend = `{"letters":'${values.letters}',"type":"com.reactcwqr.codewars.service.Letters"}`
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
                        <div style={{ display: 'flex' }} >
                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                Copy
                            </button>
                            <button className="form-input-btn"
                                onClick={EmptyField}>
                                Empty
                            </button>
                            <button className="form-input-btn"
                                type='submit'>
                                Submit
                            </button>
                        </div>
                        <input
                            name="letters"
                            onChange={handleFirstCodeInputChange}
                            value={values.letters}
                            className="form-inputs"
                            placeholder="letters"
                            style={{ width: '100%' }}
                        />

                        <motion.div style={{ display: 'flex' }} >
                            <motion.div custom={0} animate={controls} style={styleMo} >L</motion.div>
                            <motion.div custom={1} animate={controls} style={styleMo} >I</motion.div>
                            <motion.div custom={2} animate={controls} style={styleMo} >T</motion.div>
                            <motion.div custom={3} animate={controls} style={styleMo} >E</motion.div>
                            <motion.div custom={4} animate={controls} style={styleMo} >R</motion.div>
                            <motion.div custom={5} animate={controls} style={styleMo} >A</motion.div>
                            <motion.div custom={6} animate={controls} style={styleMo} >K</motion.div>
                            <motion.div custom={7} animate={controls} style={styleMo} >I</motion.div>
                            {/* <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >L</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 0.5,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >I</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 1,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >T</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 1.5,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >E</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 2,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >R</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 2.5,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >K</motion.div>

                            <motion.div style={{
                                width: 25,
                                height: 25,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginRight: 4
                            }}
                                transition={{
                                    delay: 3,
                                    type: "spring",
                                    damping: 10,
                                    mass: 0.75,
                                    stiffness: 100
                                }} animate={controls}
                            >I</motion.div> */}

                        </motion.div>

                        <p style={{ color: 'white' }}>Answer from server:</p>
                        {
                            submitted && !values.letters ?
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
                </form>
            </div>
        </div>
    )
}

export default Letters;