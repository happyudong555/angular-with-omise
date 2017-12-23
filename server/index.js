var bodyParser = require('body-parser');
const omise = require('omise')({
    'publicKey': "pkey_test_57vo88hrxzcpzuhzzrg",
    'secretKey': "skey_test_57vo88hs85r8478o4oh"
})
const express = require('express')
const app = express()

app.use(function (req, res, next) {


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.post('/pay', (req, res) => {
    let returnData;
    let pay = omise.charges.create({
        'amount': req.body.amount,
        'currency': 'thb',
        'card': req.body.tokenID
    }, (err, resp) => {
        if (!err) {
            console.log(resp);
            returnData = {
                pay: "success"
            };
            res.send(returnData);
        } else {
            console.log(err)
            returnData = {
                pay: "failed"
            };
            res.send(returnData);
        }
    });
})

app.post('/addbank', (req, res) => {
    omise.recipients.create({
        'name': req.body.name,
        'email': req.body.email,
        'type': 'individual',
        'bank_account': {
            'brand': req.body.brand,
            'number': req.body.number,
            'name': req.body.name
        }
    }, (err, resp) => {
        if (!err) {
            console.log(resp);
            returnData = {
                pay: "success"
            };
            res.send(returnData);
        } else {
            console.log(err)
            returnData = {
                pay: "failed"
            };
            res.send(returnData);
        }
    });
})

app.post('/listRe', (req, res) => {
    omise.recipients.list((err, resp) => {
        if (!err) {
            res.send(resp);
        } else {
            res.send(err);
        }
    });
})

app.post('/transfer', (req, res) => {
    omise.transfers.create({
        'amount': req.body.amount,
        'recipient': req.body.recipient
    }, function (error, transfer) {
        if (!error) {
            console.log(transfer);
            res.send({pay:"success"});
        } else {
            console.log(error)
            res.send({pay:"error"});
        }
    });
})

app.post('/checktransfer',(req , res)=>{
    console.log(req.body)
    omise.transfers.retrieve(req.body.transfer, function(error, transfer) {
        console.log(transfer)
        res.send(transfer)
      });
})

app.get('/', (req, res) => {
    res.send("demo Omise");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})