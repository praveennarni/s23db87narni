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


// Handle Gift delete on DELETE.
exports.gift_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await gift.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
    // Handle a delete one view with id from query
    exports.gift_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await gift.findById(req.query.id)
        res.render('giftdelete', { title: 'Gift Delete', toShow:
        result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };

// Handle a show one view with id specified by query
exports.gift_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await gift.findById( req.query.id)
res.render('giftdetail',
{ title: 'Gift Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gift_create_Page = function(req, res) {
console.log("create view")
try{
res.render('giftcreate', { title: 'Gift Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
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

// Handle Costume update form on PUT.
exports.gift_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
let toUpdate = await gift.findById( req.params.id)
// Do updates of properties
if(req.body.gift_name)toUpdate.gift_name = req.body.gift_name;
if(req.body.numof_gifts) toUpdate.numof_gifts = req.body.numof_gifts;
if(req.body.gift_value) toUpdate.gift_value = req.body.gift_value;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

// Handle building the view for updating a costume.
// query provides the id
exports.gift_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gift.findById(req.query.id)
    res.render('giftupdate', { title: 'Gift Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };



// for a specific Costume.
exports.gift_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gift.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };