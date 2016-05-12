var express = require('express');
var router = express.Router();
var statisticLib = require('../routes/lib/statistic');
/* GET home page. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var Duration 	= 480;//req.body.duration,
	var CPI 		= 0.07;//req.body.cpi;
	if (!req.body.principal | !req.body.principal <= 0)
		Principal = 20000000;
	else
		Principal = req.body.principal;

	if (!req.body.interest | !req.body.interest <= 0)
		Interest
	else
		Interest
	if (!req.body.duration | !req.body.duration <= 0)

	if (!req.body.cpi | !req.body.cpi <= 0)



	var objReturn = statisticLib.indexloan(Principal, Interest, Duration, CPI);
	


  	return res.status(200).json(objReturn);
});

router.get('/indexloanP', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloanP(Principal, Interest, duration, CPI);
	


  	return res.status(200).json(objReturn);
});
router.get('/indexloanDate', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloanDate(Principal, Interest, duration, CPI);
	


  	return res.status(200).json(objReturn);
});


module.exports = router;

