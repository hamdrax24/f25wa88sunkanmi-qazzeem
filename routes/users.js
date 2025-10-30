var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var current = 2;
  var factor = 25;
  current = current * factor;
  res.send(`Current is: ${current}`);
});

module.exports = router;
