var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controller/api');
var gift_controller = require('../controller/gifts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gift ROUTES ///
// POST request for creating a Gift.
router.post('/gifts', gift_controller.gift_create_post);
// DELETE request to delete Gift.
router.delete('/gifts/:id', gift_controller.gift_delete);
// PUT request to update Gift.
router.put('/gifts/:id', gift_controller.gift_update_put);
// GET request for one Gift.
router.get('/gifts/:id', gift_controller.gift_detail);
// GET request for list of all Gift items.
router.get('/gifts', gift_controller.gift_list);
module.exports = router;