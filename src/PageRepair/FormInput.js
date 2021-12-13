import React, { useState } from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './FormInput.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Collapse from './InfoCollapsed'

const FormInput = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors, handleChangePicture, isSubmitted } = useForm(submitForm, validate)

    const [startDate, setStartDate] = useState(new Date())
    var currentDate = startDate;
    var appExpireDate = new Date(currentDate);
    appExpireDate.setDate(appExpireDate.getDate() + 15);

    function formatedDate(date) {
        const year = date.toLocaleDateString('de-DE', { year: 'numeric' })
        const month = date.toLocaleDateString('de-DE', { month: '2-digit' })
        const day = date.toLocaleDateString('de-DE', { day: '2-digit' })
        const formatedDate = year + '-' + month + '-' + day
        return formatedDate
    }
    values.startDate = formatedDate(startDate)
    values.expire = formatedDate(appExpireDate)

    //console.log(values);
    const red = '/picture/Red.png'
    const yellow = '/picture/Yellow.png'
    const green = '/picture/Green.png'
    const lights = { red, yellow, green }
    const [selected, setSelected] = useState(lights.red)

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Neuen Fehler eingeben.
                </h1>
                <div>
                    <Collapse>
                        <h4>Kurze Anleitung:</h4>
                        <p>Wieder neuer Fehler... kein Problem!</p>
                        <p>Das folgende Programm wurde geschrieben, um meine Programmierkenntnisse zu demonstrieren. Um diese Website zu erstellen, habe ich Frontend in der JS ReactHooks-Technologie und Backend in JAVA verwendet. Alle grafischen Elemente (mit Ausnahme einiger Icons von https://react-icons.github.io/) wurden von mir mit InkScape und Gimp gezeichnet. Im linken Menü finden Sie weitere Unterprogramme, die die Arbeit des Unternehmens und der Mitarbeiter unterstützen, wie den DienstBörse-Kalender oder die Seite mit Informationen zu Umwegen - Umleitungen. Zusätzlich habe ich auf der letzten Menü einige in JAVA geschriebene Unterprogramme (Übungen von codewars.com) mit der entsprechenden Benutzeroberfläche in REACTHOOKS eingefügt.<br /><br />
  Die Idee des Programms "Ausfall" basiert auf der gegenseitigen Förderung von Fahrern und Information über den technischen Zustand des Fahrzeugs. Wichtig: Wenn Sie nur wissen, wie Sie mit dem Problem umgehen sollen, füllen Sie bitte das Feld “Reparaturmethode” aus.<br /><br />
  Um Informationen über den gefundenen Fehler hinzufügen einfach füllen Sie das Formular aus. Das Formular enthält zwei Pflichtfelder: Registrierungsnummer und Beschreibung.
 </p>
                    </Collapse>
                </div>
                <div className="form-inputs">
                    <div>
                        <label htmlFor="startDate"
                            className="form-label">
                            Datum
                    </label><br />
                        <DatePicker
                            className="form-input"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            maxDate={new Date()}
                        />
                    </div>
                    <br />

                    <label htmlFor="registrationNo"
                        className="form-label" >
                        Kennzeichen
                    </label>
                    <select
                        id="registrationNo"
                        type="text"
                        name="registrationNo"
                        className="form-input-select"
                        onChange={handleChange}>
                        <option value={null}>wählen</option>
                        <option value="5313"> 5313 </option>
                        <option value="6301"> 6301 </option>
                        <option value="6302"> 6302 </option>
                        <option value="6303"> 6303 </option>
                        <option value="6304"> 6304 </option>
                        <option value="6305"> 6305 </option>
                        <option value="6306"> 6306 </option>
                        <option value="6307"> 6307 </option>
                        <option value="6308"> 6308 </option>
                        <option value="6309"> 6309 </option>
                        <option value="6310"> 6310 </option>
                        <option value="6311"> 6311 </option>
                        <option value="6312"> 6312 </option>
                        <option value="6313"> 6313 </option>
                        <option value="6314"> 6314 </option>
                        <option value="6315"> 6315 </option>
                        <option value="6400"> 6400 </option>
                        <option value="6401"> 6401 </option>
                        <option value="6402"> 6402 </option>
                        <option value="6403"> 6403 </option>
                        <option value="6404"> 6404 </option>
                        <option value="6405"> 6405 </option>
                        <option value="6406"> 6406 </option>
                        <option value="6407"> 6407 </option>
                        <option value="6408"> 6408 </option>
                        <option value="6409"> 6409 </option>
                        <option value="6410"> 6410 </option>
                        <option value="6411"> 6411 </option>
                        <option value="6412"> 6412 </option>
                        <option value="6413"> 6413 </option>
                        <option value="6414"> 6414 </option>
                        <option value="6415"> 6415 </option>
                        <option value="6416"> 6416 </option>
                        <option value="6417"> 6417 </option>
                        <option value="6418"> 6418 </option>
                        <option value="6419"> 6419 </option>
                        <option value="6420"> 6420 </option>
                        <option value="6421"> 6421 </option>
                        <option value="6422"> 6422 </option>
                        <option value="6423"> 6423 </option>
                        <option value="6424"> 6424 </option>
                        <option value="6425"> 6425 </option>
                        <option value="6426"> 6426 </option>
                        <option value="6427"> 6427 </option>
                        <option value="6428"> 6428 </option>
                        <option value="6429"> 6429 </option>
                        <option value="6430"> 6430 </option>
                        <option value="6431"> 6431 </option>
                        <option value="6432"> 6432 </option>
                        <option value="6433"> 6433 </option>
                        <option value="6434"> 6434 </option>
                        <option value="6435"> 6435 </option>
                        <option value="6436"> 6436 </option>
                        <option value="6437"> 6437 </option>
                        <option value="6438"> 6438 </option>
                        <option value="6439"> 6439 </option>
                        <option value="6440"> 6440 </option>
                        <option value="6441"> 6441 </option>
                        <option value="6442"> 6442 </option>
                        <option value="6443"> 6443 </option>
                        <option value="6443"> 6447 </option>
                        <option value="6443"> 6448 </option>
                        <option value="9400"> 9400 </option>
                        <option value="9401"> 9401 </option>
                        <option value="9402"> 9402 </option>
                        <option value="9403"> 9403 </option>
                        <option value="9404"> 9404 </option>
                        <option value="9405"> 9405 </option>
                        <option value="9406"> 9406 </option>
                        <option value="9407"> 9407 </option>
                        <option value="9408"> 9408 </option>
                        <option value="9409"> 9409 </option>
                        <option value="9410"> 9410 </option>
                        <option value="9411"> 9411 </option>
                        <option value="9412"> 9412 </option>
                        <option value="9413"> 9413 </option>
                        <option value="9414"> 9414 </option>
                        <option value="9415"> 9415 </option>
                        <option value="9416"> 9416 </option>
                        <option value="9417"> 9417 </option>
                        <option value="9418"> 9418 </option>
                        <option value="9420"> 9420 </option>
                    </select>
                    {errors.registrationNo && <p>{errors.registrationNo}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="description"
                        className="form-label">
                        Beschreibung
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        name="description"
                        className="form-input"
                        placeholder="Beschreibung geben"
                        value={values.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div className="form-inputs-status-pictures">
                    <div className="form-input-status" >
                        <label htmlFor="status"
                            className="form-label">
                            Status
                    </label>
                        <div>
                            <input id="status"
                                type="radio"
                                name="status"
                            />
                            <img
                                src={selected}
                                alt='lights'
                                name="status"
                                onClick={() => {
                                    if (selected === lights.red) {
                                        setSelected(lights.yellow)
                                        values.status = 'Yellow'
                                    } else if (selected === lights.yellow) {
                                        setSelected(lights.green)
                                        values.status = 'Green'
                                    } else {
                                        setSelected(lights.red)
                                        values.status = 'Red'
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="form-input-pictures">
                        <label htmlFor="pictures"
                            className="form-label">
                            Fehlermeldung auswählen
                    </label>
                        <div
                            id="pictures"
                            type="text"
                            name="pictures"
                            className="form-input"
                            onChange={handleChangePicture}
                        >
                            <label>
                                <input id="L0absY" type="checkbox" name="pictures" value='L0absY' />
                                <img src="/picture/L0absY.png" alt="L0absY" />
                            </label>
                            <label>
                                <input id="L1breaksR" type="checkbox" name="pictures" value='L1breaksR' />
                                <img src="/picture/L1breaksR.png" alt="L1breaksR" />
                            </label>
                            <label>
                                <input id="L2doorsR" type="checkbox" name="pictures" value='L2doorsR' />
                                <img src="/picture/L2doorsR.png" alt="L2doorsR" />
                            </label>
                           
                            <label>
                                <input id="L26kinderwagenW" type="checkbox" name="picture" value='L26kinderwagenW' />
                                <img src="/picture/L26kinderwagenW.png" alt="L26kinderwagenW" />
                            </label>
                           
                            <label>
                                <input id="L3drivelightG" type="checkbox" name="picture" value='L3drivelightG' />
                                <img src="/picture/L3drivelightG.png" alt="L3drivelightG" />
                            </label>
                            <label>
                                <input id="L4engineY" type="checkbox" name="picture" value='L4engineY' />
                                <img src="/picture/L4engineY.png" alt="L4engineY" />
                            </label>
                            <label>
                                <input id="L5tachoY" type="checkbox" name="picture" value='L5tachoY' />
                                <img src="/picture/L5tachoY.png" alt="L5tachoY" />
                            </label>
                            <label>
                                <input id="L6haltY" type="checkbox" name="picture" value='L6haltY' />
                                <img src="/picture/L6haltY.png" alt="L6haltY" />
                            </label>
                            <label>
                                <input id="L7filterY" type="checkbox" name="picture" value='L7filterY' />
                                <img src="/picture/L7filterY.png" alt="L7filterY" />
                            </label>
                            <label>
                                <input id="L8heizungY" type="checkbox" name="picture" value='L8heizungY' />
                                <img src="/picture/L8heizungY.png" alt="L8heizungY" />
                            </label>
                            <label>
                                <input id="L9oilR" type="checkbox" name="picture" value='L9oilR' />
                                <img src="/picture/L9oilR.png" alt="L9oilR" />
                            </label>
                            <label>
                                <input id="L10standbreaksR" type="checkbox" name="picture" value='L10standbreaksR' />
                                <img src="/picture/L10standbreaksR.png" alt="L10standbreaksR" />
                            </label>
                            <label>
                                <input id="L11standlightG" type="checkbox" name="picture" value='L11standlightG' />
                                <img src="/picture/L11standlightG.png" alt="L11standlightG" />
                            </label>
                            <label>
                                <input id="L12ventilatorY" type="checkbox" name="picture" value='L12ventilatorY' />
                                <img src="/picture/L12ventilatorY.png" alt="L12ventilatorY" />
                            </label>
                            <label>
                                <input id="L13waterR" type="checkbox" name="picture" value='L13waterR' />
                                <img src="/picture/L13waterR.png" alt="L13waterR" />
                            </label>
                            <label>
                                <input id="L14kneeY" type="checkbox" name="picture" value='L14kneeY' />
                                <img src="/picture/L14kneeY.png" alt="L14kneeY" />
                            </label>
                            <label>
                                <input id="L15setY" type="checkbox" name="picture" value='L15setY' />
                                <img src="/picture/L15setY.png" alt="L15setY" />
                            </label>
                            <label>
                                <input id="L16reversY" type="checkbox" name="picture" value='L16reversY' />
                                <img src="/picture/L16reversY.png" alt="L16reversY" />
                            </label>
                            <label>
                                <input id="L17batteryR" type="checkbox" name="picture" value='L17batteryR' />
                                <img src="/picture/L17batteryR.png" alt="L17batteryR" />
                            </label>
                            <label>
                                <input id="L18luftY" type="checkbox" name="picture" value='L18luftY' />
                                <img src="/picture/L18luftY.png" alt="L18luftY" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* <div className="form-inputs">
                    <label htmlFor="errorCode"
                        className="form-label">
                        Fehler Code
                    </label>
                    <input
                        id="errorCode"
                        type="text"
                        name="errorCode"
                        className="form-input"
                        placeholder="Fehler Code eingeben"
                        value={values.errorCode}
                        onChange={handleChange}
                    />
                    
                </div> */}
                <div className="form-inputs">
                    <label htmlFor="repairDescription"
                        className="form-label">
                        Reparatur Methode <span style={{ color: 'yellow' }}>sehr wichtig!</span>
                    </label>
                    <input
                        id="repairDescription"
                        type="text"
                        name="repairDescription"
                        className="form-input"
                        placeholder="Reparatur Methode eingeben"
                        value={values.repairDescription}
                        onChange={handleChange}
                    />
                    {errors.repairDescription && <p>{errors.repairDescription}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="spitzName"
                        className="form-label">
                        SpitzName
                    </label>
                    <select
                        id="spitzName"
                        type="text"
                        name="spitzName"
                        placeholder="Spitzname eingeben"
                        className="form-input-select"
                        onChange={handleChange}>
                        <option value="König der Landstraße">König der Landstraße</option>
                        <option value="Hans Sandwich">Hans Sandwich</option>
                        <option value="Edzia Goerniak">Edzia Goerniak</option>
                        <option value="Sikko Pikko">Sikko Pikko</option>
                        <option value="Szybki Ludwin">Szybki Ludwin</option>
                        <option value="Fahrerwunsch">Fahrerwunsch</option>
                        <option value="Schneller Ludvin">Schneller Ludvin</option>
                        <option value="Quietscheentchen">Quietscheentchen</option>
                        <option value="Gumowa kaczka">Gumowa kaczka</option>
                        <option value="Blasenbruch">Blasenbruch</option>
                        <option value="Was noch zum Teufel!?">Was noch zum Teufel!?</option>
                    </select>
                    {/* {errors.spitzName && <p>{errors.spitzName}</p>} */}
                </div>
                <button className="form-input-btn"
                    type='submit'  >
                    eingeben
                </button>
                <div
                    className={!isSubmitted ? 'success-window-hidden' : 'success-window'}
                >DANKE! <br/>
                Du hast deinen Kollegen wirklich geholfen
                </div>
            </form>

        </div>
    )
}

export default FormInput;


