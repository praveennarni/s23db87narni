var express = require('express');
const gift_controlers= require('../controller/gifts');
var router = express.Router();
/* GET gifts */
router.get('/', gift_controlers.gift_view_all_Page );
module.exports = router;