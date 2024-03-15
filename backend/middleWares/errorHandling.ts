

function errorHandling(err, req, res, next) {
    console.log(err.stack);
    res.tatus(500).send('Something broke');
} 

module.exports = errorHandling;