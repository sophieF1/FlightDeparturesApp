'use strict'

class ScraperService {
    constructor() { }

    // add scraping service
//     scrapeIt("https://www.schiphol.nl/en/departures", {
//     title: "table-flights__time th"
// , desc: "th"
// ,
// }).then(page => {
//     console.log(page)
// })

// // Callback interface
// scrapeIt("https://www.schiphol.nl/en/departures", {
//         // Fetch the articles
//         articles: {
//             listItem: "table-flights__status"
//             , data: {
//
//                 // Get the departure time and convert it into a Date object
//                 createdAt: {
//                     selector: ".flight-times"
//                     , convert: x => new Date(x)
//             }
//
//             // Get the Destination
//             , title: "d.table-flights__airport"
//
//             // Get the Flight number
//             , flight: "d.table-flights__number"
//
//             // Get the Airline
//             , airline: "d.table-flights__airline"
//
//
//             // Get the content
//             , content: {
//                 selector: ".departureTime"
//                 , how: "html"
//             }
//         }
//     }
//
//     // Fetch the departures
//     , pages: {
//     listItem: "li.page"
//         , name: "pages"
//         , data: {
//         title: "a"
//
//     }
// }
//
// }, (err, page) => {
//     console.log(err || page)
// })

}

module.exports = new ScraperService();