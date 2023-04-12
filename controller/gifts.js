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

// Handle Costume create on POST.
exports.gift_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gift();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gift_name":"watch", "numof_gifts":12, "gift_value":"cvbn"}
    document.gift_name = req.body.gift_name;
    document.numof_gifts = req.body.numof_gifts;
    document.gift_value = req.body.gift_value;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Gift create on POST.
exports.gift_detail = async function(req, res) {
    try{
        theGifts = await Gift.find();
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


// VIEWS
// Handle a show all view
exports.gift_view_all_Page = async function(req, res) {
try{
theGifts = await gift.find();
res.render('gift', { title: 'Gifts Search Results', results: theGifts });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};