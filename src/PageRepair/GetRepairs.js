import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/LoginForm.css';
import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'
import * as IoIosRadioButtonOn from 'react-icons/io'
import url from '../components/useURL.js'

const GetRepairs = () => {
    const [repairs, setRepairs] = useState([]);
    const [removeButtonShow, setRemoveButtonShow] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [passwordToRemove, setPasswordToRemove] = useState()
    const [isRemoving, setIsRemoving] = useState(false)
    const [id, setId] = useState('')
    const [urlDB, setUrlDB] = useState(url + ':8087/repair')

    const SortByDate = () => {
        setUrlDB(url + ':8087/repair?sortBy=startDate&sortDirection=descending')
    }
    const SortByRegistration = () => {
        setUrlDB(url + ':8087/repair?sortBy=registrationNo&sortDirection=ascending')
    }
    const SortRed = () => {
        setUrlDB(url + ':8087/repair?statusNo=2')
    }
    const SortYellow = () => {
        setUrlDB(url + ':8087/repair?statusNo=1')
    }
    const SortGreen = () => {
        setUrlDB(url + ':8087/repair?statusNo=0')
    }
    const [serverError, setServerError] = useState(false)
    const [nothingToShow, setNothingToShow] = useState(false)
    useEffect(() => {
        console.log(urlDB)
        axios.get(urlDB)
            .then(function (response) {
                setServerError(false)
                setNothingToShow(false)
                setRepairs(response.data)
                console.log(response.data)
                if ((response.data).length === 0) {
                    setNothingToShow(true)
                    // return 'Keine Ergebnisse, aber sei nicht glücklich, dass etwas mit Sicherheit kaputt geht'
                }
            })
            .catch(function (error) {
                setNothingToShow(false)
                console.log(error)
                setServerError(true)
            })

    }, [urlDB])

    const RemovingOpen = () => {
        setRemoveButtonShow(!removeButtonShow)
        setErrorPassword(false)
    }
    const RemovingClose = () => {
        setRemoveButtonShow(false)
        setErrorPassword(false)
    }

    const handleRemove = e => {
        if (passwordToRemove === '111') {
            setIsRemoving(true)
            setId(e.target.value)
            console.log(id)
            setRemoveButtonShow(false)
        } else {
            setErrorPassword(true)
        }
    }

    useEffect(() => {
        if (isRemoving) {
            axios.delete(url + `:8087/remove/${id}`)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    },
        [isRemoving, id]
    )

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="repair-container">
                    <div className="sorting-buttons-box">
                        <button className='sorting-buttons' onClick={SortByDate}><BiIcons.BiSortDown /> Date</button>
                        <button className='sorting-buttons' onClick={SortByRegistration}><BiIcons.BiSortUp /> Reg.No.</button>
                        &nbsp;&nbsp;&nbsp;Status:
                        <button className='sorting-buttons' id='status2' value='status2' onClick={SortRed} ><IoIosRadioButtonOn.IoIosRadioButtonOn style={{ color: 'red', fontSize: 15 }} /></button>
                        <button className='sorting-buttons' id='status1' value='status1' onClick={SortYellow} ><IoIosRadioButtonOn.IoIosRadioButtonOn style={{ color: 'yellow', fontSize: 15 }} /></button>
                        <button className='sorting-buttons' id='status2' value='status0' onClick={SortGreen} ><IoIosRadioButtonOn.IoIosRadioButtonOn style={{ color: 'green', fontSize: 15 }} /></button>

                        {serverError ?
                            <div className='sorting-buttons-box'><br />Der Server ist billig und faul! <br /> Versuchen Sie es später erneut oder<br /> sprechen Sie mit dem Administrator.<br /></div>
                            : nothingToShow ? <div className='sorting-buttons-box'><br />Es gibt keine Ergebnisse,<br /> aber sei nicht glücklich,<br /> es wird definitiv bald wieder brechen.<br /></div> : ''}

                    </div>
                    {
                        repairs.map((repair) => (
                            <ul key={repair.id}>
                                <div className="repair">
                                    <span className="label">id: </span><span className="value">{repair.id}</span>
                                    <span className="label">Start: </span><span className="value">{repair.startDate}</span>
                                    <span className="label">Ende: </span><span className="value">{repair.expire}</span><br />
                                    <span className="label">Kennzeichen: </span><span className="value">{repair.registrationNo}</span><br />
                                    <span className="label">Beschreibung: </span><span className="value">{repair.description}</span><br />

                                    <span className="container-repair-pictures">
                                        <span >
                                            <img className="repair-status" src={`/picture/${repair.status}.png`} alt="Red" />
                                        </span>
                                        <span key={repair.pictures.key}>
                                            {repair.pictures.map(item =>
                                                <span key={item}>
                                                    <img className="repairs-pictures" src={`/picture/${item}.png`} alt={item} />
                                                </span>
                                            )}
                                        </span>
                                    </span>
                                    <br />
                                    <span className="label">Error: </span><span className="value">{repair.errorCode}</span><br />
                                    <span className="label">Reparatur: </span><span className="value">{repair.repairDescription}</span><br />
                                    <span className="label">Spitzname: </span><span className="value">{repair.spitzName}</span>
                                    <div>
                                        {!removeButtonShow ? <button className='delete-repair-btn' onClick={RemovingOpen}>x</button> : ''}
                                    </div>
                                    {/* Window for removing */}
                                    <div>
                                        {removeButtonShow ? (
                                            <div>
                                                {errorPassword ? (<div className="error">Passwort ist Falsh</div>) : ('')}
                                                <input id={repair.id + 'remove'} placeholder='Code zum Löschen' type="password" name="password" onChange={e => setPasswordToRemove(e.target.value)} />
                                                <button type="submit" className='del-confirm-repair-btn' value={repair.id} onClick={handleRemove} >Entfernen</button>
                                                <button type="submit" className='delete-repair-btn' onClick={RemovingClose} >x</button>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </ul>
                        ))
                    }<br />

                </div >
            </IconContext.Provider>
        </>
    )
}

export default GetRepairs;

// //---------------------------------COPY------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './LoginForm.css';

// const GetRepairs = () => {
//     const [repairs, setRepairs] = useState([]);
//     const [removeButtonShow, setRemoveButtonShow] = useState(false)
//     const [errorPassword, setErrorPassword] = useState(false)
//     const [passwordToRemove, setPasswordToRemove] = useState()
//     const [isRemoving, setIsRemoving] = useState(false)
//     const [id, setId] = useState('')

//     const fetchRepairs = async () => {
//         //const response = await axios.get(`http://localhost:8080/repair`);
//         const response = await axios.get(`https://7776.link:8080/repair`);
//         ////const response = await axios.get(`https://7776.link:8443/repair`);
//         ////const response = await axios.get(`http://217.160.250.25:8080/repair`); 

//         setRepairs(response.data);
//         //setPictures(response.data.pictures)
//     }
//     useEffect(() => { fetchRepairs(repairs) }, [repairs])

//     const RemovingOpen = () => {
//         setRemoveButtonShow(!removeButtonShow)
//         setErrorPassword(false)
//     }
//     const RemovingClose = () => {
//         setRemoveButtonShow(false)
//         setErrorPassword(false)
//     }

//     const handleRemove = e => {
//         if (passwordToRemove === '111') {
//             setIsRemoving(true)
//             setId(e.target.value)
//             console.log(id)
//             setRemoveButtonShow(false)
//         } else {
//             setErrorPassword(true)
//         }
//     }

//     useEffect(() => {
//         if (isRemoving) {
//             //callback();
//             //axios.delete(`http://localhost:8080/remove/${id}`)
//             axios.delete(`https://7776.link:8080/remove/${id}`)
//                 .then(function (response) {
//                     console.log(response)
//                 })
//                 .catch(function (error) {
//                     console.log(error)
//                 })
//         }
//     },
//         [isRemoving, id]
//     )

//     return (
//         <div className="repair-container">

//             {
//                 // pictures.map((pictures) => (
//                 //     <span key={pictures.id}></span>
//                 // ))

//                 repairs.map((repair) => (
//                     <ul key={repair.id}>
//                         <div className="repair">
//                             <span className="label">id: </span><span className="value">{repair.id}</span>
//                             <span className="label">Start: </span><span className="value">{repair.startDate}</span>
//                             <span className="label">Ende: </span><span className="value">{repair.expire}</span><br />
//                             <span className="label">Kennzeichen: </span><span className="value">{repair.registrationNo}</span><br />
//                             <span className="label">Beschreibung: </span><span className="value">{repair.description}</span><br />


//                             <span className="container-repair-pictures">
//                                 <span >
//                                     <img className="repair-status" src={`/picture/${repair.status}.png`} alt="Red" />
//                                 </span>
//                                 <span key={repair.pictures.key}>
//                                     {repair.pictures.map(item =>
//                                         <span key={item}>
//                                             <img className="repairs-pictures" src={`/picture/${item}.png`} alt={item} />
//                                         </span>
//                                     )}
//                                 </span>
//                             </span>
//                             <br />
//                             <span className="label">Error: </span><span className="value">{repair.errorCode}</span><br />
//                             <span className="label">Reparatur: </span><span className="value">{repair.repairDescription}</span><br />
//                             <span className="label">Spitzname: </span><span className="value">{repair.spitzName}</span>
//                             <div>
//                                 {!removeButtonShow ? <button className='delete-repair' onClick={RemovingOpen}>x</button> : ''}
//                             </div>
//                             {/* Window for removing */}
//                             <div>
//                                 {removeButtonShow ? (
//                                     <div>
//                                         {errorPassword ? (<div className="error">Passwort ist Falsh</div>) : ('')}
//                                         <input id={repair.id + 'remove'} placeholder='Code zum Löschen' type="password" name="password" onChange={e => setPasswordToRemove(e.target.value)} />
//                                         <button type="submit" value={repair.id} onClick={handleRemove} >Entfernen</button>
//                                         <button type="submit" onClick={RemovingClose} >x</button>
//                                     </div>
//                                 ) : (
//                                     ""
//                                 )}
//                             </div>
//                         </div>
//                     </ul>
//                 ))
//             }<br />

//         </div >
//     )
// }

// export default GetRepairs;