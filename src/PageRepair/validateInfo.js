export default function validateInfo(values) {
    let errors = {};

    if (!values.registrationNo) {
        errors.registrationNo = "Kennzeichen muss gewählt werden"
    }

    if (!values.description) {
        errors.description = "Beschreibung muss ausgefühlt werden!"
    }

    return errors;
}