var express = require('express');
var router = express.Router();
var scrapeIt = require('scrape-it');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index');
//     scrapeIt("https://www.schiphol.nl/en/departures", {
//         title: "table-flights__time th"
//         , desc: "th"
//         ,
//     }).then(page => {
//         console.log(page)
// })
//
// // Callback interface
//     scrapeIt("https://www.schiphol.nl/en/departures", {
//             // Fetch the articles
//             articles: {
//                 listItem: ".article"
//                 , data: {
//
//                     // Get the article date and convert it into a Date object
//                     createdAt: {
//                         selector: ".flight-times"
//                         , convert: x => new Date(x)
//                 }
//
//                 // Get the Destination
//                 , title: "d.table-flights__airport"
//
//                 // Nested list
//                 , tags: {
//                     listItem: ".tags > span"
//                 }
//
//                 // Get the content
//                 , content: {
//                     selector: ".article-content"
//                     , how: "html"
//                 }
//             }
//         }
//
//         // Fetch the blog pages
//         , pages: {
//         listItem: "li.page"
//             , name: "pages"
//             , data: {
//             title: "a"
//                 , url: {
//                 selector: "a"
//                     , attr: "href"
//             }
//         }
//     }
//
//     // Fetch some other data from the page
//     , title: ".header h1"
//         , desc: ".header h2"
//         , avatar: {
//         selector: ".header img"
//             , attr: "src"
//     }
// }, (err, page) => {
//         console.log(err || page)
//     })
});


module.exports = router;
