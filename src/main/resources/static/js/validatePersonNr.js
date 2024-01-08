function validatePersonNr(personNr) {
    // Sjekk at personnummeret er 11 tegn
    if (personNr.length !== 11) {
        return false;
    }

    // Hent ut individnummeret (de siste fem sifrene)
    const individualNumber = personNr.substring(6, 11);

    // Sjekk om individnummeret er gyldig (mellom 00001 og 99999)
    const individualNumberInt = parseInt(individualNumber, 10);
    if (isNaN(individualNumberInt) || individualNumberInt < 1 || individualNumberInt > 99999) {
        return false;
    }

    // Sjekk om datoformatet er gyldig
    const day = parseInt(personNr.substring(0, 2), 10);
    const month = parseInt(personNr.substring(2, 4), 10);
    let year = parseInt(personNr.substring(4, 6), 10);

    // Legg til 1900 hvis årstallet er mindre enn 30 (for eksempel 20 blir til 2020)
    year += year < 30 ? 2000 : (year < 100 ? 1900 : (year >= 100 && year < 130 ? 1800 : 0));

    // Sjekk om fødselsdatoen er gyldig
    if (
        isNaN(day) || isNaN(month) || isNaN(year) ||
        day < 1 || day > 31 ||
        month < 1 || month > 12 ||
        (year < 0 || (year >= 30 && year <= 99))
    ) {
        return false;
    }

    // Sjekk kontrollsifrene
    const k1 = parseInt(personNr.charAt(9), 10);
    const k2 = parseInt(personNr.charAt(10), 10);

    const weights = [3, 7, 6, 1, 8, 9, 4, 5, 2];

    const checksum = weights.reduce((sum, weight, index) => {
        return sum + weight * parseInt(personNr.charAt(index), 10);
    }, 0);

    const remainder = checksum % 11;
    const expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;

    return k1 === expectedCheckDigit && k2 === (k1 === 10 ? 0 : k2 === 10 ? 0 : k2);
}