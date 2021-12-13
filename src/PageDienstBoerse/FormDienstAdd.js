import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import url from '../components/useURL'
import { Collapsible } from 'react-hook-collapse'
import './FormDienstAdd.css'

export default function FormDienstAdd() {
    const [collapse, setCollapse] = useState(false)
    // form validation rules 
    const validationSchema = Yup.object().shape({
        number: Yup.string()
            .required('Dienst Nummer ist obligatorisch!'),

        date: Yup.string()
            .required('Datum ist obligatorisch!')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),

        hourBegin: Yup.string()
            .required('is required')
            .matches(/[0-9]$/, 'Stunde wählen'),

        minutesBegin: Yup.string()
            .required('is required')
            .matches(/[0-9]$/, 'Minuten wählen'),

        hourEnd: Yup.string()
            .required('is required')
            .matches(/[0-9]$/, 'Stunde wählen'),

        minutesEnd: Yup.string()
            .required('is required')
            .matches(/[0-9]$/, 'Minuten wählen'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    console.log(validationSchema)

    const [submitting, setSubmitting] = useState(false)
    function onSubmit(data) {
        // display form data on success
        console.log(submitting)
        console.log(JSON.stringify(data))

        axios.post(url + ':8087/dienst', data)
            .then(function (response) {
                console.log(response)
                // setClearValues(true)
            })
            .catch(function (error) {
                console.log(error)
            })

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        setSubmitting(true)
        return false;
    }

    const hours = ['Stunde', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    const minutes = ['Minuten', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']

    return (
        <div>
            <section className='form-add-container'>
                <button className="button-form-add"
                    onClick={() => {
                        setCollapse(!collapse);
                    }}
                >
                    + Neuen Dienst hinzufügen
                </button>
                <Collapsible
                    expanded={collapse}
                    style={{ overflow: 'hidden', transition: '0.7s' }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="formadd-grid-container">
                        <div className="formadd-item1">

                            <label>Nummer</label>
                            <input name="number" type="text" {...register('number')} className={`form-control ${errors.number ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.number?.message}</div>
                        </div>

                        <div className="formadd-item2">
                            <label>Datum</label>
                            <input name="date" type="date" {...register('date')} className={`form-control ${errors.date ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.date?.message}</div>
                        </div>

                        {/* TIME START */}
                        <div className="formadd-item3">
                            <label>Startzeit</label>
                            <select name="hourBegin" {...register('hourBegin')} className={`form-control ${errors.hourBegin ? 'is-invalid' : ''}`}>
                                {hours.map((number) =>
                                    <option value={number} key={number}>{number}</option>
                                )}
                            </select>

                            <select name="minutesBegin" {...register('minutesBegin')} className={`form-control ${errors.minutesBegin ? 'is-invalid' : ''}`}>
                                {minutes.map((number) =>
                                    <option value={number} key={number}>{number}</option>
                                )}
                            </select>
                            <div>
                                <span className="invalid-feedback">{errors.hourBegin?.message} </span>
                                <span className="invalid-feedback">{errors.minutesBegin?.message}</span>
                            </div>
                        </div>
                        {/* TIME END */}
                        <div className="formadd-item4">
                            <label>Endzeit</label>
                            <select name="hourEnd" {...register('hourEnd')} className={`form-control ${errors.hourEnd ? 'is-invalid' : ''}`}>
                                {hours.map((number) =>
                                    <option value={number} key={number}>{number}</option>
                                )}
                            </select>

                            <select name="minutesEnd" {...register('minutesEnd')} className={`form-control ${errors.minutesEnd ? 'is-invalid' : ''}`}>
                                {minutes.map((number) =>
                                    <option value={number} key={number}>{number}</option>
                                )}
                            </select>
                            <div>
                                <span className="invalid-feedback">{errors.hourEnd?.message} </span>
                                <span className="invalid-feedback">{errors.minutesEnd?.message}</span>
                            </div>
                        </div>


                        {/* BUTTON DIENST MELDEN RESET */}
                        <div className="formadd-item5">
                            <button type="submit" className="button-form-add-end">Dienst melden</button>
                            <button type="button" onClick={() => reset()} className="button-form-add-end">Reset</button>
                        </div>

                    </form>
                </Collapsible>
            </section>

        </div >
    )
}
