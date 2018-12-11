const express = require('express');
// const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'hbs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: true
// }))

// app.post('/saveStudent', (request, response) => {
// 	var id = request.body.id;
// 	var name = request.body.name;
// 	var email = request.body.email;

// 	var db = utils.getDb();
// 	db.collection('student').insertOne({
// 		id: id,
// 		name: name,
// 		email: email
// 	}, (err,result) => {
// 		if (err) {
// 			response.send('Unable to insert student');
// 		}
// 		response.send(JSON.stringify(result.ops,undefined,2))
// 	})
// });

app.get('/', (request, response) => {
	response.send('NIbba')
});


app.listen(8080, () => {
	console.log('Server up on port 8080');
})