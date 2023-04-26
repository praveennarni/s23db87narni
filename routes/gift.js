var express = require('express');
const gift_controlers= require('../controller/gifts');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
    
/* GET gifts */
router.get('/', gift_controlers.gift_view_all_Page );
/* GET detail costume page */
router.get('/detail', gift_controlers.gift_view_one_Page);

/* GET create costume page */
router.get('/create', gift_controlers.gift_create_Page);
/* GET create update page */
router.get('/update',secured, gift_controlers.gift_update_Page);
/* GET delete costume page */
router.get('/delete', gift_controlers.gift_delete_Page);
module.exports = router;