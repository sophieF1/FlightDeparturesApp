var express = require('express');
var router = express.Router();
var scrapeIt = require('scrape-it');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index');
});


module.exports = router;
