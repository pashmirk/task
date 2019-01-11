var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.json(["Shiva", "Ben"]);
});

module.exports = router;