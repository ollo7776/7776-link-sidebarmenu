import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../components/useURL.js'


const useForm = (callback, validate) => {
    // const useForm = ( validate ) => {

    const [values, setValues] = useState({
        registrationNo: '',
        startDate: '',
        expire: '',
        description: '',
        status: 'Red',
        errorCode: '',
        repairDescription: '',
        spitzName: '',
        pictures: []
    })
    const [picturesArr, setPicturesArr] = useState(values.pictures)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    // const [clearValues, setClearValues] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleChangePicture = (e) => {
        const valueForm = e.target.getAttribute("value")
        //const temp = [...picturesArr];
        if (picturesArr.includes(valueForm)) {
            // temp.splice(name, 1);
            // setPicturesArr(temp)
            setPicturesArr(picturesArr.filter(item => item !== valueForm))
        } else {
            setPicturesArr([...picturesArr, valueForm])
        }
    }

    console.log(values)
    console.log(picturesArr)

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true)
        setValues({
            ...values, pictures: picturesArr
        })
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 &&
            isSubmitting) {
            setIsSubmitted(true)
            axios.post(url + ':8087/repair', values)
                .then(function (response) {
                    console.log(response)
                    // setClearValues(true)
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
    },
        [errors, isSubmitting, values]
    )

    // useEffect(() => {
    //     if (clearValues) {
    //         setValues(
    //             {
    //                 registrationNo: '',
    //                 startDate: '',
    //                 expire: '',
    //                 description: '',
    //                 status: 'Red',
    //                 errorCode: '',
    //                 repairDescription: '',
    //                 spitzName: '',
    //                 pictures: []
    //             }
    //         )
    //     }
    //     setClearValues(false)
    // }, [clearValues])
    
    return { handleChange, values, handleSubmit, errors, handleChangePicture, isSubmitted }
}

export default useForm;