import React, { useState } from 'react'

const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed)
// var textAnleitung = '
//     Das folgende Programm wurde geschrieben, um meine Programmierkenntnisse zu demonstrieren. Um diese Website zu erstellen, habe ich Frontend in der JS ReactHooks-Technologie und Backend in JAVA verwendet. Alle grafischen Elemente (mit Ausnahme einiger Icons von https://react-icons.github.io/) wurden von mir mit InkScape und Gimp gezeichnet. Im linken Menü finden Sie weitere Unterprogramme, die die Arbeit des Unternehmens und der Mitarbeiter unterstützen, wie den DienstBörse-Kalender oder die Seite mit Informationen zu Umwegen - Umleitungen. Zusätzlich habe ich auf der letzten Menü einige in JAVA geschriebene Unterprogramme (Übungen von codewars.com) mit der entsprechenden Benutzeroberfläche in REACTHOOKS eingefügt. <br/>
// Die Idee des Programms basiert auf der gegenseitigen Förderung von Fahrern und Information über den technischen Zustand des Fahrzeugs. Wichtig: Wenn Sie nur wissen, wie Sie mit dem Problem umgehen sollen, füllen Sie bitte das Feld “Reparaturmethode” aus.</br>
//     Um Informationen über den gefundenen Fehler hinzufügen einfach füllen Sie das Formular aus. Das Formular enthält zwei Pflichtfelder: Registrierungsnummer und Beschreibung.
//     '


    return (
        <>
            <div className='collapse-button'
                onClick={() => setIsCollapsed(!isCollapsed)
                }
                >
               Kurze Anleitung {isCollapsed ? 'schließen' : 'öffnen'} 
</div>
            <div className={`collapse-content ${isCollapsed ? 'expanded' : 'collapsed'}`}
                aria-expanded={isCollapsed}>
                {children}
            </div>
        </>
    )
}

export default Collapse