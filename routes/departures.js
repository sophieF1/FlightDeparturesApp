var express = require('express');
var router = express.Router();
var scrapeItService = require('../services/scraperService');

router.get('/', function(req, res) {
    res.render('pages/departures', {airportCode: req.query.airportCode});
    scrapeItService.scrapeIt();
});

module.exports = router;