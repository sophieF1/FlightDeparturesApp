const cheerio = require("cheerio");
const req = require("tinyreq");

const AIRPORT_DOMAINS = {
    "AMS": "https://www.schiphol.nl/en/departures",
    "LHR": "https://www.heathrow.com/departures",
    "MEL": "https://www.melbourneairport.com.au/Passengers/Flights/Departures"
}

function getDomain(airport) {
    const airportUrl = AIRPORT_DOMAINS[airport];
    return airportUrl;
}

async function getDepartures(airport) {
    const url = await getDomain(airport);

    const departures = await req(url, (err, body) => {
        if(err) {throw err};
        // 2. Parse the HTML
        let $ = cheerio.load(body), pageData = {};
        const data = {
            flightDefinition: ".flight-definition__description"
        }
        //3. Extract the data: Departure time, destination, Flight number, Airline
        Object.keys(data).forEach(k => {
            pageData[k] = $(data[k]).text();
            //console.log('pageData', pageData[k]);
        });
        console.log('pagedata', pageData);
        return pageData;
    });
}

module.exports = {getDepartures};

//getAirportDepartures("AMS");