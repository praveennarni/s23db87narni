var gift = require('../models/gift');
// List of all Gifts
exports.gift_list = async function(req, res) {
    try{
        theGifts = await gift.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// for a specific Gift.
exports.gift_detail =async function(req, res) {
    try{
        theGifts = await gift.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift detail: ' + req.params.id);
};
// Handle Gift create on POST.
exports.gift_create_post = async function(req, res) {
    try{
        theGifts = await gift.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
//res.send('NOT IMPLEMENTED: Gift create POST');
};
// Handle Gift delete form on DELETE.
exports.gift_delete = async function(req, res) {
    try{
        theGifts = await gift.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id);
};
// Handle Gift update form on PUT.
exports.gift_update_put = async function(req, res) {
    try{
        theGifts = await gift.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id);
};