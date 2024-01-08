function fillFormAutomatically() {
    for (let i = 0; i < 20; i++) {
        // Generer tilfeldige verdier for hvert felt
        const personNr = generateRandomValidPersonNr();
        const navn = generateRandomName();
        const adresse = generateRandomAddress();
        const bilSkilt = generateRandomCarPlate();
        const bilMerke = generateRandomCarBrand();
        const bilModel = generateRandomCarModel(bilMerke);
        const bilFarge = generateRandomBilFarge();

        // Fyll ut skjemaet med de genererte verdiene
        document.getElementById("personNr").value = personNr;
        document.getElementById("navn").value = navn;
        document.getElementById("adresse").value = adresse;
        document.getElementById("bilSkilt").value = bilSkilt;
        document.getElementById("bilMerke").value = bilMerke;
        document.getElementById("bilModel").value = bilModel;
        document.getElementById("bilFarge").value = bilFarge;

        // Legg til produkt i tabellen
        addProdukt();
        scrollToTable();
    }
}

function generateRandomBilFarge() {

    const farger = document.getElementById("bilFargeList").options;

    const randomIndex = Math.floor(Math.random() * farger.length);

    return farger[randomIndex].value;
}

// Funksjon for å generere gyldig personnummer
function generateRandomPersonNr() {
    const randomYear = String(Math.floor(Math.random() * 100)).padStart(2, '0');
    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Random month (01-12)
    const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // Random day (01-28)
    const randomNumbers = String(Math.floor(Math.random() * 90000) + 10000); // Ensure 5 digits
    return `${randomDay}${randomMonth}${randomYear}${randomNumbers}`;
}

const fornavn = ['Erik', 'Ingrid', 'Marius', 'Silje', 'Andreas', 'Lene', 'Jon', 'Helene', 'Ole', 'Marte', 'Per', 'Kari', 'Oskar', 'Ida', 'Jørgen', 'Kristine', 'Thomas', 'Sofie', 'Geir', 'Anita', 'Anders', 'Maria', 'Petter', 'Eva', 'Fredrik', 'Camilla', 'Øystein', 'Inger', 'Sindre', 'Cecilie', 'Espen', 'Hanne', 'Gunnar', 'Hilde', 'Gustav', 'Anna', 'Henrik', 'Kristin', 'Trond', 'Pernille', 'Lars', 'Hildegunn', 'Stian', 'Lise', 'Oskar', 'Monica', 'Kristoffer', 'Bente', 'Ola', 'Nina', 'Sigurd', 'Charlotte', 'Martin', 'Mari', 'André', 'Elisabeth', 'Håkon', 'Tone', 'Even', 'Margrethe', 'Einar', 'Ane', 'Erling', 'Elin', 'Knut', 'Vilde', 'Simen', 'Hege', 'Joakim', 'Marit', 'Magnus', 'Anne', 'Johan', 'Julie', 'Nils', 'Sara', 'Lars-Erik', 'Camilla', 'Arne', 'Marianne', 'Olav', 'Iselin', 'Stig', 'Astrid', 'Roar', 'Frida', 'Pål', 'Siri', 'Terje', 'Jeanette', 'Bjørn', 'Hannah', 'Jan', 'Vivian', 'Olaug', 'Alexander', 'Caroline', 'Leif', 'Elise', 'Kjell'];
const etternavn = ['Hansen', 'Olsen', 'Pedersen', 'Johansen', 'Andersen', 'Nilsen', 'Solberg', 'Larsen', 'Sørensen', 'Kristiansen', 'Eriksen', 'Ødegaard', 'Halvorsen', 'Svendsen', 'Martinsen', 'Johnsen', 'Christensen', 'Jacobsen', 'Andreassen', 'Lund', 'Thomsen', 'Bakke', 'Sande', 'Moe', 'Strand', 'Haugen', 'Berg', 'Myhre', 'Simonsen', 'Gundersen', 'Holm', 'Rasmussen', 'Tangen', 'Knutsen', 'Ruud', 'Kvamme', 'Foss', 'Haugland', 'Berntsen', 'Hovland', 'Nilsson', 'Lunde', 'Hagen', 'Hovde', 'Viken', 'Sandvik', 'Aas', 'Åsheim', 'Bjerke', 'Engebretsen', 'Fjeld', 'Skoglund', 'Torp', 'Øyen', 'Borge', 'Vestby', 'Holmen', 'Tveit', 'Jansen', 'Aune', 'Lien', 'Åsen', 'Rønning', 'Wold', 'Dahl', 'Brekke', 'Sletteng', 'Evensen', 'Tobiassen', 'Sand', 'Lind', 'Bakken', 'Sæther', 'Torgersen', 'Helle', 'Rønningen', 'Moen', 'Tveito', 'Øverby', 'Jenssen', 'Stensrud', 'Eide', 'Solheim', 'Isaksen', 'Vatne', 'Gulbrandsen', 'Fossen', 'Tollefsen', 'Haug', 'Strøm', 'Rønstad', 'Vangen', 'Gundersrud', 'Storli', 'Aasen', 'Stene', 'Husby', 'Aamodt', 'Aasgaard', 'Torkildsen'];

function generateRandomName() {
    const randomFornavn = fornavn[Math.floor(Math.random() * fornavn.length)];
    const randomEtternavn = etternavn[Math.floor(Math.random() * etternavn.length)];

    return `${randomFornavn} ${randomEtternavn}`;
}

const gateadresser = ['Hovedgata', 'Bakkeveien', 'Skogveien', 'Fjellgata', 'Sjøgata', 'Lundveien', 'Skogstien', 'Havnegata', 'Fjordveien', 'Bakkegrenda', 'Strandgata', 'Lærerstien', 'Solgata', 'Høiveien', 'Prestegrenda', 'Fjellstien', 'Skoleveien', 'Havnestykket', 'Fjordgrenda', 'Blomsterstien', 'Fiskergata', 'Idrettsveien', 'Solskrenten', 'Høystien', 'Presteveien', 'Storgata', 'Skogsstien', 'Havneveien', 'Fjellryggen', 'Bakkelien', 'Strandveien', 'Lærdalsgrenda', 'Solbakken', 'Høyskrenten', 'Presteskrenten', 'Stien', 'Skogslia', 'Havnebukt', 'Fjordryggen', 'Bakkelien', 'Strandstien', 'Lundegrenda', 'Solkroken', 'Høygrenda', 'Prestekroken', 'Vestgata', 'Skogskanten', 'Havnesvingen', 'Fjordgata', 'Bakkerud', 'Strandgrenda', 'Lærergata', 'Soleveien', 'Høyryggen', 'Prestelien', 'Østgata', 'Skogkroken', 'Havnebyen', 'Fjellskrenten', 'Bakkelia', 'Strandryggen', 'Lundegata', 'Solstien', 'Høybukt', 'Presteskogen', 'Nordgata', 'Skogryggen', 'Havnekroken', 'Fjordstien', 'Bakkely', 'Strandsvingen', 'Lundekroken', 'Solbakkestien', 'Høyveien', 'Presteveien', 'Sørgata', 'Skogkanten', 'Havnelia', 'Fjellbakken', 'Bakkelien', 'Strandbakken', 'Lærerstien', 'Solskrenten', 'Høystien', 'Presteveien', 'Storgata', 'Skogsstien', 'Havneveien', 'Fjellryggen', 'Bakkelien', 'Strandveien', 'Lærdalsgrenda', 'Solbakken', 'Høyskrenten', 'Presteskrenten', 'Stien', 'Skogslia', 'Havnebukt', 'Fjordryggen', 'Bakkelien', 'Strandstien', 'Lundegrenda', 'Solkroken', 'Høygrenda', 'Prestekroken', 'Vestgata', 'Skogskanten', 'Havnesvingen', 'Fjordgata', 'Bakkerud', 'Strandgrenda', 'Lærergata', 'Soleveien', 'Høyryggen', 'Prestelien', 'Østgata', 'Skogkroken', 'Havnebyen', 'Fjellskrenten', 'Bakkelia', 'Strandryggen', 'Lundegata', 'Solstien', 'Høybukt', 'Presteskogen', 'Nordgata', 'Skogryggen', 'Havnekroken', 'Fjordstien', 'Bakkely'];
const postnumre = ['0123', '4567', '8901', '2345', '6789', '1357', '2468', '3579', '4680', '5791', '1234', '5678', '9012', '3456', '7890', '3571', '8642', '9753', '0864', '1928', '4321', '8765', '1098', '5432', '9876', '7513', '8246', '9375', '0468', '1927', '3412', '7654', '1987', '6543', '2109', '9870', '5435', '7531', '6428', '3579', '0864', '9271', '1234', '5678', '9012', '3456', '7890', '3571', '8642', '9753', '0864', '1928', '4321', '8765', '1098', '5432', '9876', '7513', '8246', '9375', '0468', '1927', '3412', '7654', '1987', '6543', '2109', '9870', '5435', '7531', '6428', '3579', '0864', '9271', '1234', '5678', '9012', '3456', '7890', '3571', '8642', '9753', '0864', '1928', '4321', '8765', '1098', '5432', '9876', '7513', '8246', '9375', '0468', '1927', '3412', '7654'];
const byer = ['OSLO', 'BERGEN', 'TRONDHEIM', 'STAVANGER', 'TROMSØ', 'KRISTIANSAND', 'DRAMMEN', 'ÅLESUND', 'MOLDE', 'BODØ', 'SANDNES', 'HAUGESUND', 'SKIEN', 'NARVIK', 'KRISTIANSUND', 'ARENDAL', 'HAMAR', 'SARPSBORG', 'ALTA', 'ASKIM', 'SKIPTVET', 'SVELVIK', 'GJØVIK', 'BRYNE', 'KONGSVINGER', 'RÅHOLT', 'HØNEFOSS', 'MOSS', 'MYSSEN', 'SORTLAND', 'PORSGRUNN', 'NAMSOS', 'LILLEHAMMER', 'TØNSBERG', 'LARVIK', 'SANDEFJORD', 'KRAGERØ', 'FØRDE', 'AREMARK', 'LYNGDAL', 'FLORØ', 'STORD', 'OTTA', 'NÆRBØ', 'RAUFOSS', 'ØRSTA', 'KRØDEREN', 'RAUMA', 'STJØRDAL', 'VERDAL', 'FREDRIKSTAD', 'HARSTAD', 'VOLDÅSEN', 'NORDFJORDEID', 'HAMMERFEST', 'KIRKENES', 'ÅLGÅRD', 'RØYKEN', 'GRIMSTAD', 'SANDNESSJØEN', 'MÅLØY', 'KARASJOK', 'NAMSSKOGAN', 'KOPPANG', 'SELJORD', 'ÅRØYBUKTA', 'BREMANGER', 'KVAM', 'BØ I TELEMARK', 'EIDSVOLL', 'MELHUS', 'STANGE', 'SØRUMSAND', 'HOLMESTRAND', 'MOSJØEN', 'VADSØ', 'LILLESAND', 'LØRENSKOG', 'FLÅM', 'RØROS', 'KVINESDAL', 'VEGA', 'MALVIK', 'RØST', 'FOLLDAL', 'RISØR', 'VANG I VALDRES', 'ÅMOT', 'VESTVÅGØY', 'VESTBY'];

function generateRandomAddress() {
    const randomGateadresse = gateadresser[Math.floor(Math.random() * gateadresser.length)];
    const randomPostnummer = postnumre[Math.floor(Math.random() * postnumre.length)];
    const randomBy = byer[Math.floor(Math.random() * byer.length)];

    return `${randomGateadresse} 123, ${randomPostnummer} ${randomBy}`;
}

function generateRandomCarPlate() {
    const numbers = '0123456789';

    // Velger tilfeldig by og bokstavkode fra listen
    const randomCityEntry = byerOgBokstavkoder[Math.floor(Math.random() * byerOgBokstavkoder.length)];
    const randomLetterCode = randomCityEntry.bokstavkoder[Math.floor(Math.random() * randomCityEntry.bokstavkoder.length)];

    // Setter opp to identiske bokstaver basert på valgt by og bokstavkode
    const randomLetters = randomLetterCode.repeat(1);

    // Genererer tilfeldige tall
    const randomNumbers = Array.from({length: 5}, () => numbers[Math.floor(Math.random() * numbers.length)]).join('');

    // Setter sammen og returnerer bilskiltet
    return `${randomLetters}${randomNumbers}`;
}


function generateRandomCarBrand() {
    // Get the list of car brands
    const carBrands = document.getElementById("bilMerkeList").options;

    // Get a random index within the range of available car brands
    const randomIndex = Math.floor(Math.random() * carBrands.length);

    // Return the randomly selected car brand
    return carBrands[randomIndex].value;
}

function generateRandomCarModel(bilMerke) {
    const carModels = {
        toyota: ['Camry', 'Corolla', 'Rav4', 'Highlander', 'Prius', 'Sienna', 'Tacoma', 'Tundra', '4Runner', 'Land Cruiser', 'Supra', 'Yaris', 'Avalon', 'Venza', 'C-HR', 'Sequoia', 'Mirai', 'GR86', 'Century', 'BZ4X'],
        volkswagen: ['Golf', 'Passat', 'Tiguan', 'Atlas', 'Jetta', 'Arteon', 'ID.4', 'Touareg', 'Atlas Cross Sport', 'Taos', 'Beetle', 'CC', 'T-Roc', 'Up!', 'Polo', 'Scirocco', 'Golf R', 'Golf GTI', 'Tiguan Allspace', 'ID.3'],
        ford: ['F-150', 'Focus', 'Escape', 'Explorer', 'Mustang', 'Edge', 'Ranger', 'Fusion', 'Expedition', 'Bronco', 'Mach-E', 'Transit', 'EcoSport', 'Flex', 'Taurus', 'F-250 Super Duty', 'F-350 Super Duty', 'F-450 Super Duty', 'Fiesta', 'GT'],
        chevrolet: ['Silverado', 'Equinox', 'Malibu', 'Camaro', 'Tahoe', 'Traverse', 'Colorado', 'Blazer', 'Suburban', 'Trailblazer', 'Spark', 'Impala', 'Cruze', 'Sonic', 'Trax', 'Express', 'Volt', 'Bolt EV', 'Corvette', 'Camaro ZL1'],
        nissan: ['Rogue', 'Altima', 'Sentra', 'Murano', 'Pathfinder', 'Titan', 'Maxima', 'Armada', 'Versa', 'Kicks', '370Z', 'Leaf', 'Juke', 'NV200', 'Rogue Sport', 'GT-R', 'Frontier', 'Quest', 'Xterra', '240SX'],
        honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Fit', 'HR-V', 'Ridgeline', 'Insight', 'Passport', 'S2000', 'Element', 'CR-Z', 'Clarity', 'NSX', 'Prelude', 'Integra', 'Legend', 'CRX', 'Accord Crosstour', 'City'],
        mercedes_benz: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'A-Class', 'CLA', 'GLA', 'G-Class', 'GLS', 'SLC', 'SL', 'GLB', 'M-Class', 'SLK', 'R-Class', 'B-Class', 'X-Class', 'EQC', 'GLK-Class'],
        bmw: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X1', '4 Series', 'X7', '2 Series', '8 Series', 'Z4', 'i3', 'X6', 'X4', 'M2', 'M3', 'M4', 'M5', 'M6', 'X2', 'X4 M'],
        audi: ['A4', 'A6', 'Q5', 'Q7', 'Q3', 'A3', 'A8', 'Q8', 'e-tron', 'RS6 Avant', 'TT', 'R8', 'S4', 'S5', 'S6', 'S8', 'Q2', 'Q4 e-tron', 'Q6', 'RS3', 'RS7'],
        hyundai: ['Elantra', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Sonata', 'Venue', 'Ioniq', 'Veloster', 'Genesis', 'Nexo', 'Accent', 'Azera', 'Equus', 'G80', 'G90', 'G70', 'Kona Electric', 'Santa Cruz', 'Pony'],
        tesla: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck', 'Roadster', 'Model X Plaid', 'Model S Plaid', 'Model 2', 'Model 4', 'Model 5', 'Model 6', 'Model 7', 'Model 8', 'Model 9', 'Model 10', 'Model C', 'Model R', 'Model U'],
        volvo: ['XC90', 'XC60', 'S60', 'S90', 'V60', 'V90', 'XC40', 'C40', 'Polestar 2', 'V60 Cross Country', 'S40', 'V40', 'XC50', 'C30', 'V50', 'S70', 'XC70', 'S80', 'V70', 'S90 Recharge', 'XC90 Recharge'],
        kia: ['Seltos', 'Sportage', 'Telluride', 'Sorento', 'Forte', 'Soul', 'Niro', 'Cadenza', 'Stinger', 'Rio', 'Optima', 'K900', 'K5', 'Seltos X-Line', 'Stonic', 'Ceed', 'Soul EV', 'e-Niro', 'Carnival', 'EV6'],
        subaru: ['Outback', 'Forester', 'Crosstrek', 'Ascent', 'Impreza', 'Legacy', 'BRZ', 'WRX', 'XV Crosstrek', 'Baja', 'Tribeca', 'SVX', 'Justy', 'XT', 'R1', 'R2', 'Traviq', 'Exiga', 'Sambar', 'Domingo'],
        mazda: ['CX-5', 'Mazda3', 'CX-9', 'Mazda6', 'MX-5 Miata', 'CX-30', 'RX-7', 'RX-8', 'Mazdaspeed3', 'MPV', 'RX-3', 'RX-4', 'RX-5', 'RX-9', 'Millenia', 'Navajo', '626', 'Tribute', 'MX-6', 'Protegé'],
        lexus: ['RX', 'NX', 'ES', 'UX', 'GX', 'IS', 'LS', 'LC', 'LX', 'RC', 'CT', 'LFA', 'HS', 'SC', 'GS', 'LM', 'LF', 'LF-A', 'RX L', 'UX 300e', 'RC F', 'ES Hybrid'],
        jeep: ['Grand Cherokee', 'Cherokee', 'Wrangler', 'Compass', 'Renegade', 'Gladiator', 'Wagoneer', 'Grand Wagoneer', 'CJ-5', 'CJ-7', 'CJ-8 Scrambler', 'Commander', 'Patriot', 'Liberty', 'Willys', 'FC', 'Jeepster', 'Comanche', 'Hurricane', 'J8'],
        ram: ['1500', '2500', '3500', 'ProMaster', 'ProMaster City', 'Rebel TRX', 'Ramcharger', 'Dakota', 'Power Wagon', '700', '750', '1200', 'Van', 'Wagon', 'Ram Van', 'Ram Wagon', 'Ram 100', 'Ram 150', 'Ram 250', 'Ram 350'],
        porsche: ['911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', 'Boxster', 'Cayman', '718 Spyder', '911 GT3', '944', '928', '968', '914', '912', '550 Spyder', '356', '959', '918 Spyder', 'Carrera GT', 'Cayenne Coupe', 'Panamera Sport Turismo'],
        acura: ['MDX', 'RDX', 'TLX', 'ILX', 'NSX', 'RLX', 'Integra', 'Legend', 'Vigor', 'TSX', 'ZDX', 'CSX', 'SLX', 'EL', 'CL', 'Vigorous', 'Precision', 'CDX', 'RL', 'RLX Sport Hybrid'],
        infiniti: ['QX60', 'QX50', 'Q50', 'QX80', 'QX30', 'Q60', 'QX70', 'FX35', 'FX45', 'EX35', 'JX35', 'QX56', 'QX4', 'M30', 'M45', 'G20', 'G35', 'G37', 'I30', 'I35', 'J30'],
        land_rover: ['Range Rover', 'Discovery', 'Defender', 'Range Rover Sport', 'Range Rover Velar', 'Evoque', 'Freelander', 'LR2', 'LR3', 'LR4', 'Discovery Sport', 'Series I', 'Series II', 'Series III', 'County', 'Santana', 'Forward Control', 'One Ten', 'Ninety', 'Llama'],
        jaguar: ['F-PACE', 'E-PACE', 'I-PACE', 'XF', 'XJ', 'XE', 'S-Type', 'X-Type', 'XJS', 'XK', 'XKR', 'XFR', 'XFR-S', 'XJ220', 'XJR', 'XE SV Project 8', 'F-Type', 'C-X17', 'C-X75', 'C-X16'],
        fiat: ['500', '500X', '500L', '124 Spider', 'Doblo', 'Panda', 'Uno', 'Tipo', 'Bravo', 'Croma', 'Seicento', 'Multipla', 'Stilo', 'Idea', 'Qubo', 'Linea', 'Palio', 'Albea', 'Sedici', '500e'],
        mitsubishi: ['Outlander', 'Eclipse Cross', 'Outlander Sport', 'Mirage', 'Lancer', 'Montero', 'Galant', '3000GT', 'Diamante', 'Raider', 'Endeavor', 'Magna', 'Sigma', 'Challenger', 'FTO', 'RVR', 'L300', 'Triton', 'GTO', 'Starion'],
        buick: ['Encore', 'Enclave', 'Envision', 'Regal', 'Cascada', 'Verano', 'Lacrosse', 'Lucerne', 'Skyhawk', 'Electra', 'Century', 'Reatta', 'Roadmaster', 'Riviera', 'Apollo', 'Wildcat', 'Terraza', 'Avenir', 'GL6', 'GL8'],
        gmc: ['Sierra 1500', 'Yukon', 'Acadia', 'Terrain', 'Canyon', 'Denali', 'Jimmy', 'Sonoma', 'Syclone', 'Safari', 'TopKick', 'Typhoon', 'Caballero', 'Sprint', 'Brigadier', 'Rally', 'Envoy', 'W4500 Forward', 'W5500 Forward', 'W3500 Forward'],
        chrysler: ['Pacifica', 'Voyager', '300', 'Aspen', 'Concorde', 'Sebring', 'Town & Country', 'LHS', 'Cirrus', 'PT Cruiser', 'Crossfire', 'Viper', 'Imperial', 'New Yorker', 'LeBaron', 'Fifth Avenue', 'Saratoga', 'Windsor', 'TC by Maserati', 'Valiant'],
        dodge: ['Durango', 'Charger', 'Challenger', 'Journey', 'Viper', 'Grand Caravan', 'Dart', 'Avenger', 'Caliber', 'Nitro', 'Magnum', 'Intrepid', 'Stratus', 'Ram Van', 'Ram Wagon', 'Ram 100', 'Ram 150', 'Ram 250', 'Ram 350', 'Ram 50'],
        cadillac: ['XT5', 'Escalade', 'XT4', 'CT5', 'CT4', 'ATS', 'XT6', 'CT6', 'XTS', 'Seville', 'Eldorado', 'DeVille', 'Catera', 'BLS', 'STS', 'XLR', 'Fleetwood', 'Allante', 'Sixty Special', 'Calais', 'Series 62'],
        lincoln: ['Navigator', 'Aviator', 'Corsair', 'Nautilus', 'Continental', 'MKZ', 'MKX', 'MKC', 'MKT', 'Town Car', 'LS', 'Zephyr', 'Blackwood', 'Mark LT', 'MKX', 'Capri', 'Versailles', 'Premiere'],
        mini: ['Cooper', 'Countryman', 'Clubman', 'Paceman', 'Convertible', 'Coupe', 'Roadster', 'Clubvan', 'John Cooper Works', 'Traveller', 'Rocketman', 'Superleggera', 'Inspired by Goodwood', 'Beachcomber', 'Crossover', 'Minor', 'Clubman Estate', 'Mini Electric', 'Clubman All4'],
        alfa_romeo: ['Giulia', 'Stelvio', '4C', 'Giulietta', 'Mito', 'Brera', 'Spider', '156', '159', '147', '166', 'GT', 'GTV', 'SZ', 'RZ', '8C Competizione', 'Crosswagon Q4', '159 Sportwagon', 'GTA', '33 Stradale', '1900'],
        ferrari: ['F8 Tributo', '812 Superfast', 'Roma', 'SF90 Stradale', 'Portofino', '458 Italia', '488 GTB', 'LaFerrari', 'California', 'GTC4Lusso', 'FF', 'F12 Berlinetta', '599 GTB Fiorano', '430 Scuderia', '360 Modena', 'Enzo Ferrari', 'Testarossa', '328 GTB', 'Dino 246 GT', '250 GTO'],
        lamborghini: ['Urus', 'Huracán', 'Aventador', 'Sián FKP 37', 'Essenza SCV12', 'Gallardo', 'Murciélago', 'Diablo', 'Countach', 'Miura', 'Islero', 'Jarama', 'Espada', '400 GT', 'Reventón', 'Veneno', 'Centenario', 'Sesto Elemento', 'Huracán Performante', 'Aventador SVJ'],
        maserati: ['Levante', 'Ghibli', 'Quattroporte', 'GranTurismo', 'MC20', 'Spyder', 'Coupe', 'GranSport', '3200 GT', 'Quattroporte Evo', 'Biturbo', 'Shamal', 'Kyalami', 'Bora', 'Indy', 'Ghibli SS', 'Merak', 'Khamsin', 'Mistral', '3500 GT'],
        bentley: ['Bentayga', 'Continental GT', 'Flying Spur', 'Mulsanne', 'Bacalar', 'Arnage', 'Azure', 'Brooklands', 'Turbo R', 'Continental R', 'Continental T', 'Eight', 'Mulsanne Turbo', 'S1 Continental', 'S2 Continental', 'S3 Continental', 'Mark VI', 'Mark VII', 'Mark VIII', 'Mark IX'],
        rolls_royce: ['Phantom', 'Cullinan', 'Ghost', 'Wraith', 'Dawn', 'Silver Ghost', 'Silver Wraith', 'Silver Dawn', 'Silver Cloud', 'Silver Shadow', 'Silver Spirit', 'Silver Spur', 'Camargue', 'Corniche', 'Phantom V', 'Phantom VI', 'Phantom Drophead Coupé', 'Phantom Coupé', 'Ghost Extended', 'Wraith Black Badge'],
        aston_martin: ['DB11', 'DBS Superleggera', 'Vantage', 'Rapide', 'Valhalla', 'DB9', 'Vanquish', 'Virage', 'DB7', 'DB4', 'DB5', 'DB6', 'Valkyrie', 'One-77', 'DB10', 'Vulcan', 'Cygnet', 'Lagonda', 'Bulldog', 'DBS V12'],
        mclaren: ['720S', '570S', 'GT', 'Speedtail', 'Artura', 'P1', '675LT', '650S', '12C', 'MP4-12C', '570GT', '540C', 'MSO HS', 'Sabre', 'Elva', 'F1', 'Mercedes-Benz SLR McLaren', 'McLaren GT', '570S Spider', '600LT', '620R'],
        bugatti: ['Chiron', 'Divo', 'Centodieci', 'La Voiture Noire', 'Veyron', 'EB110', 'Type 57', 'Type 41 Royale', 'Type 55', 'Type 59', 'Type 35', 'Type 57SC Atlantic', 'Type 251', 'Type 73C', 'Type 101', 'Type 252', 'Type 68', 'Type 251', 'Type 50T', 'Type 46'],
        lotus: ['Evora', 'Elise', 'Exige', 'Elan', 'Esprit', 'Eletre', 'Europa', 'Cortina', 'Seven', 'Elite', 'Eclat', 'Excel', 'Esprit V8', 'Carlton', '340R', '3-Eleven', 'Eleven', 'Evija', 'Type 130', 'Omega'],
        genesis: ['G80', 'G90', 'GV80', 'GV70', 'G70', 'G80 Sport', 'Essentia', 'Mint', 'GV60', 'XConcept', 'New York Concept', 'Essentia Concept', 'GV70 Shooting Brake', 'GV80 Shooting Brake', 'GV90', 'Mint Concept', 'GV70 Recharge', 'GV80 Recharge', 'GV90 Recharge'],
        rivian: ['R1T', 'R1S', 'R2S', 'R2T', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17'],
        lucid: ['Air', 'Air Touring', 'Air Grand Touring', 'Air Dream Edition', 'Gravity', 'Project Gravity', 'Casa Grande', 'Velo', 'Essence', 'Sedan', 'Concerto', 'Gravity Performance', 'Aira', 'Atmos', 'Alta', 'Dream', 'Pure', 'Sculpture', 'Kinetic', 'Cerulean'],
        polestar: ['Polestar 2', 'Polestar 1', 'Polestar 3', 'Precept', 'Polestar O2', 'Polestar 4', 'Polestar 5', 'Polestar 6', 'Polestar 7', 'Polestar 8', 'Polestar 9', 'Polestar 10', 'Polestar 11', 'Polestar 12', 'Polestar 13', 'Polestar 14', 'Polestar 15', 'Polestar 16', 'Polestar 17', 'Polestar 18'],
        koenigsegg: ['Jesko', 'Gemera', 'Regera', 'Ragnarok', 'Jesko Absolut', 'Regera Ghost', 'CCX', 'One:1', 'Agera', 'Agera RS', 'Jesko Absolut RS', 'Ragnarok RS', 'Gemera RS', 'Raja', 'Naraya', 'Koenigsegg Jesko Cherry Red Edition', 'Koenigsegg Jesko Red Cherry Edition', 'CC8S', 'CXX', 'Jesko Red Jade Edition'],
        pagani: ['Huayra', 'Huayra Roadster', 'Huayra BC', 'Huayra Roadster BC', 'Zonda', 'Cinque', 'Tricolore', 'Revolution', 'Roadster F', 'Monza', 'Uno', 'La Monza Lisa', 'HH', 'Zonda 760', 'Zonda HP Barchetta', 'Huayra L’Ultimo', 'Zonda Absolute', 'Zonda HP Roadster', 'Zonda Fantasma', 'Zonda Viola'],
        fisker: ['Ocean', 'Emotion', 'Karma Revero GT', 'Karma GS-6', 'Karma SC1 Vision Concept', 'Karma SC2 Vision Concept', 'Karma Revero Aliso', 'Karma Revero GTS', 'Fisker Atlantic', 'Fisker Karma Sunset', 'Fisker Surf', 'Fisker eMotion', 'Fisker Orbit', 'Fisker PEAR', 'Fisker Alaska', 'Fisker Snow', 'Fisker Bandit', 'Fisker Flexee', 'Fisker Jet', 'Fisker Orbit', 'Fisker Orbit Plus'],
        byton: ['M-Byte', 'K-Byte', 'Concept', 'D-Byte', 'C-Byte', 'Byton E-Byte', 'Byton E-Byte Pro', 'Byton E-Byte Plus', 'Byton M-Byte Pro', 'Byton M-Byte Plus', 'Byton K-Byte Pro', 'Byton K-Byte Plus', 'Byton C-Byte Pro', 'Byton C-Byte Plus', 'Byton D-Byte Pro', 'Byton D-Byte Plus', 'Byton E-Byte Base', 'Byton M-Byte Base', 'Byton K-Byte Base', 'Byton C-Byte Base'],
    };

    // If the selected brand exists in the carModels object, return a random model from that brand
    if (carModels[bilMerke.toLowerCase().replace(/\s/g, '_').replace("-", "_")]) {
        const randomIndex = Math.floor(Math.random() * carModels[bilMerke.toLowerCase().replace(/\s/g, '_').replace("-", "_")].length);
        return carModels[bilMerke.toLowerCase().replace(/\s/g, '_').replace("-", "_")][randomIndex];
    }

    // If the selected brand is not found or not provided, return an empty string or handle it as needed
    return '';
}