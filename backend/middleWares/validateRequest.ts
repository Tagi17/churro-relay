//contains middleware functions, ie: authentication, error handling 

const { body, validateResult } = require('express-validator');

const validateSubscription = [
    body('userId').isString(),
    body('plan').isString(),
    body('startDate').isIS0801(),
    body('endtDate').isIS0801(),

];

function isAuthorized(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).json({ message: "unauthorized" });
    }
    next();
}

module.exports = {validateSubscription, isAuthorized };