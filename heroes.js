// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
//
// var heroes = [
// 	{id:1,name:'moses'},
// 	{id:2,name:'jody'},
// 	{id:3,name:'jany'},
// 	{id:4,name:'gon'},
// 	{id:5,name:'ishai'}
// ];
//
//
// app.use(express.static('public'));
//
// http.listen(3000, function(){
// 	console.log('listening on *:3000');
// });
//
// app.get('/heroes', function(req, res){
// 	res.send(heroes);
// });
//
// app.get('/heroes/:id',function (req,res) {
// 	return FindHero(req,res);
// });
//
// app.put('/heroes/:id/:name',function (req,res) {
// 	var hero = heroes.find(function (hero) {
// 		return hero.id = req.params.id;
// 	});
// 	if(!hero)
// 		res.sendStatus(204);
// 	hero.name = req.params.name;
// 	return res.send(heroes);
// });
//
// app.post('/heroes/:id/:name',function (req,res) {
// 	if(req.params.id.length == 0 || req.params.name.length == 0)
// 		res.sendStatus(400);
// 	if(heroes.find(function (t) { return t.id == req.params.id ; }))
// 		res.sendStatus(207);
// 	heroes.push({id:req.params.id,name:req.params.name});
// 	res.sendStatus(200);
// });
//
// app.delete('/heroes/:id',function (req,res) {
// 	if(!heroes.find(function (t) { return t.id == req.params.id ; }))
// 	{
// 		res.sendStatus(404);
// 	}
// 	else
// 	{
// 		findAndRemove(heroes,'id',req.params.id)
// 		res.send(heroes);
// 	}
//
// });
//
// app.delete('/heroes',function (req,res) {
// 	if(!heroes.find(function (t) { return t.name == req.query.name ; }))
// 	{
// 		res.sendStatus(404);
// 	}
// 	else
// 	{
// 		findAndRemove(heroes,'name',req.query.name)
// 		res.send(heroes);
// 	}
// });
//
// function FindHero(req,res){
// 	var id = req.params.id;
// 	var hero = heroes.find(function (t) { return t.id == id });
// 	if(!hero)
// 		res.status(404).send('no hero found for this id');
// 	else
// 		res.send(hero);
// }
//
// function findAndRemove(array, property, value) {
// 	array.forEach(function(result, index) {
// 		if(result[property] == value||result[property] === value) {
// 			array.splice(index, 1);
// 		}
// 	});
// }