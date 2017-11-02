var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'sousuo'
}); 

/* GET home page. */
router.post('/tianjia', function(req, res, next) {
	var idA=req.body.idA;
	var idB=req.body.idB;
	var idC=req.body.idC;
	console.log(idA)
	console.log(idB)
	console.log(idC)
	res.header('Access-Control-Allow-Origin',"*")
	connection.query('INSERT INTO sousuoa (name,datai,price) VALUES ("'+idA+'" , "'+idB+'","'+idC+'")',function(err,rows){
		if(rows!=''||rows!=null){
			connection.query('SELECT * FROM sousuoa',function(err,rows){
				console.log(rows)
				res.send(rows)
			})
		}
	})
})


router.post('/xianshi', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*")
			connection.query('SELECT * FROM sousuoa',function(err,rows){
				res.send(rows)
			})	
})

module.exports = router;
