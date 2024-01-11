function addProdukt() {
    const personNr = $("#personNr").val();
    const bilSkilt = $("#bilSkilt").val();
    const navn = $("#navn").val();
    const bilMerke = $("#bilMerke").val();
    const bilModel = $("#bilModel").val();
    const adresse = $("#adresse").val();
    const skiltPrefix = bilSkilt.substring(0, 2).toLowerCase();
    const bilFargeInput = $("#bilFarge");
    let sted = "";

    for (const item of byerOgBokstavkoder) {
        sted = item.bokstavkoder.includes(skiltPrefix) ? item.by : (skiltPrefix.charAt(0) === 'e' ? "Elbil" : sted);
        if (sted) break;
    }

    sted = sted || "Ukjent sted";

    if (!personNr || !navn || !adresse || !bilSkilt || !bilMerke || !bilModel) {
        alert("Vennligst fyll ut alle felt.");
        highlightEmptyFields();
        return;
    }

    if (!validatePersonNr(personNr)) {
        alert("Vennligst skriv inn et gyldig personnummer.");
        return;
    }

    if (!validateBilSkilt(bilSkilt)) {
        alert("Vennligst skriv inn bilskilt på riktig format (2 bokstaver + 5 tall).");
        return;
    }

    const bil = {
        personNr,
        kjonn: getKjonnFromPersonNr(personNr),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        bilSkilt: bilSkilt.toLowerCase(),
        bilMerke: $("#bilMerke").val(),
        bilModel: $("#bilModel").val(),
        bilFarge: genererFargeKode(bilFargeInput),
        sted,
        fjern: "<button onclick=\"deleteProdukt(this)\">Slett</button>",
    };

    $.get("/lagre", bil, hentAlle);

    // Tøm input-feltene
    $("#personNr, #navn, #adresse, #bilSkilt, #bilMerke, #bilModel, #bilFarge").val("");

    scrollToTable();
}

function getKjonnFromPersonNr(personNr) {
    const thirdLastDigit = parseInt(personNr.charAt(8), 10);
    return thirdLastDigit % 2 === 0 ? 'Jente' : 'Gutt';
}

function validateBilSkilt(bilSkilt) {
    // Mønster for å validere bilskilt på formen 2 bokstaver + 5 tall
    const pattern = /^[A-Za-z]{2}\d{5}$/;
    return pattern.test(bilSkilt);
}

function genererFargeKode(bilFarge) {
    const valgtFargeNavn = bilFarge.val();
    const optionElement = $("#bilFargeList option[value='" + valgtFargeNavn + "']");

    // Sjekk om optionElement eksisterer
    if (!optionElement.length) {
        return ""; // Avslutt hvis elementet ikke finnes
    }

    // Få fargeverdien fra dataattributtet
    const fargeKode = optionElement.data("farge");

    // Håndter tilfeller der fargeverdien ikke er definert
    if (!fargeKode) {
        return "";
    }

    let tekstFarge = "black"; // Standard tekstfarge

    const ikkeFarger = ["#000000", "#4B0082"];

    // Konverter fargekoden til lowercase og standard hex-format
    // const standardFargeKode = fargeKode.toLowerCase();

    if (ikkeFarger.includes(fargeKode.toUpperCase())) {
        tekstFarge = "white";
    }

    return "<td style=\"background-color: " + fargeKode + "; color: " + tekstFarge + ";\">" + valgtFargeNavn + "</td>";
}