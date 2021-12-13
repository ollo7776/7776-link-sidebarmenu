import React, { useContext } from 'react'
import { CalendarDienstsList } from '../PageDienstBoerse/CalendarDienstsList'
import { DienstListContext } from '../PageDienstBoerse/DienstBoerse'

export const FuncShowDienstList = () => {
    const showDienstList = useContext(DienstListContext)
    const dienstListStyle = {
        display: showDienstList ? 'flex' : 'none',
    }
    return (
        <div className='diensts-list' style={dienstListStyle} >
            <CalendarDienstsList />
        </div>
    )
}
