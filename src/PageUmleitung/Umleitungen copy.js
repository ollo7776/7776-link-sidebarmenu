import React, { useState } from 'react'
import '../components/pages.css'


function Umleitungen() {

    const linienList = [
        {
            id: '46',
            name: <div >
                <h3>INFO Umleitung Linie 46 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '50',
            name: <div >
                <h3>INFOUmleitung Linie 50 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '52',
            name: <div >
                <h3>INFO Umleitung Linie 52 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '53',
            name: <div >
                <h3>INFO Umleitung Linie 53 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '54',
            name: <div >
                <h3>INFO Umleitung Linie 54 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '55',
            name: <div >
                <h3>INFO Umleitung Linie 55 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '58',
            name: <div >
                <h3>INFO Umleitung Linie 58 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: '59',
            name: <div >
                <h3>INFO Umleitung Linie 59 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
        {
            id: 'n11',
            name: <div >
                <h3>INFO Umleitung Linie n11 </h3>
                <h4>von 2021-01-15 bis auf weteres</h4>
                <p>In Sossenhein wird ab Montag, 2. März 2020 der Knotenpunkt Kurnainzer Straße/ Sossenhymer Weg/ Dutyring zu einem Kreisverkehr umgebaut. Während der Baumaßnahme kommt es zu umfangreichen Umleitungen der zwischen Köchst und Sossenhym verkehrenden Bus-Linien 50, 55 und 58 sowie der Nachtbus-Linie n111. Die geplante Bauzeit beträgt 26 Monate und wird voraussichtlich im 2. Quartal 2022 fertiggestellt sein.</p>
            </div>
        },
    ]

    let list = linienList
    // const [list, updateList] = useState(linienList)
    const [tempList, setTempList] = useState(list)

    const handleChange = (e) => {
        console.log(list)
        console.log(e.target.value)
        if (e.target.value === 'alle') {
            setTempList(linienList)
        } else
            setTempList(list.filter(item => item.id === e.target.value))
    }

    const [styleBig, setStyleBig] = useState(true)
    const makeBigger = () => {
        setStyleBig(prevStyleBig => !prevStyleBig)
    }

    return (
        <>
            <div className='umleitungen-head'>
                <h1>Umleitungen</h1>
            </div>
            <div>
                <button value='46' onClick={handleChange}>
                    46
                </button>
                <button value='50' onClick={handleChange}>
                    50
                </button>
                <button value='52' onClick={handleChange}>
                    52
                </button>
                <button value='53' onClick={handleChange}>
                    53
                </button>
                <button value='54' onClick={handleChange}>
                    54
                </button>
                <button value='55' onClick={handleChange}>
                    55
                </button>
                <button value='58' onClick={handleChange}>
                    58
                </button>
                <button value='59' onClick={handleChange}>
                    59
                </button>
                <button value='n11' onClick={handleChange}>
                    n11
                </button>
                <button value='alle' onClick={handleChange}>
                    Alle
                </button>
            </div>
            <div>
                {tempList.map((item, i) => {
                    return (
                        <div key={i} className='umleitung-main' >
                            <div className={styleBig ? 'umleitung-card' : 'umleitung-card-active'} onClick={makeBigger}>
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Umleitungen;