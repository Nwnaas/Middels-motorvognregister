document.getElementById('adresse').addEventListener('input', function () {
    const searchTerm = this.value;
    const datalistElement = document.getElementById('gateadresseListe');

    // Hent gateadresser fra Kartverket Norgeskart API
    fetch(`https://ws.geonorge.no/adresser/v1/sok?sok=${searchTerm}&treffPerSide=10`)
        .then(response => response.json())
        .then(data => {
            // Tøm datalisten
            datalistElement.innerHTML = "";

            // Legg til gateadresser i datalisten
            data.adresser.forEach(adresse => {
                const option = document.createElement("option");

                // Legg til postnummer og by i adresseteksten
                option.value = `${adresse.adressetekst}, ${adresse.postnummer} ${adresse.poststed}`;

                datalistElement.appendChild(option);
            });
        })
        .catch(error => console.error("Feil ved henting av gateadresser:", error));
});