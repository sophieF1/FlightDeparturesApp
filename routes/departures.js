var express = require('express');
var router = express.Router();
var airportScraper = require('../services/airportScraper');

router.get('/', (req, res) => {
    airportScraper.getDepartures(req.query.airportCode)
    .then((departures) => {
      console.log('Departures', departures);
      res.render('pages/departures', {airportCode: req.query.airportCode, departures: departures})
    }).catch((error) => {
      res.json(error)
    })
  })
  

module.exports = router;