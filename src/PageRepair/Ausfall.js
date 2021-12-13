import React from 'react'
import GetRepairs from './GetRepairs.js'
import FormInput from './FormInput.js'

function Ausfall() {
    return (
        <div className='home'>
            <div>
                    <FormInput />
                    <GetRepairs />
            </div>
        </div>
    )
}

export default Ausfall;