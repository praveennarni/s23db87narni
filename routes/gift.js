var express = require('express');
const gift_controlers= require('../controller/gifts');
var router = express.Router();
/* GET gifts */
router.get('/', gift_controlers.gift_view_all_Page );
/* GET detail costume page */
router.get('/detail', gift_controlers.gift_view_one_Page);
module.exports = router;
/* GET create costume page */
router.get('/create', gift_controlers.gift_create_Page);