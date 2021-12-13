import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import { FuncShowDienstList } from '../components/FuncShowDienstList';
import CalendarHooks from './CalendarHooks'
import FormDienstAdd from './FormDienstAdd';

export const DienstListContext = React.createContext()

function DienstBoerse() {
    const [showList, setShowList] = useState(false)
    function toggleShowList() {
        setShowList(true)
    }
    function toggleHideList() {
        setShowList(false)
    }

    return (
        <>
            <DienstListContext.Provider value={showList}>
                <div className='form-add-container'>
                    <FormDienstAdd />
                </div>
                <div onClick={toggleShowList}>
                    {/* <h1>DienstBoerse</h1> */}
                    <CalendarHooks />
                </div>
                <div onClick={toggleHideList}>
                    <FuncShowDienstList />
                </div>
            </DienstListContext.Provider>
        </>
    )
}

export default DienstBoerse;