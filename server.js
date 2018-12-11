const express = require('express');
const request = require('request');
const hbs = require("hbs");
// const bodyParser = require('body-parser');

var url=[];
console.log(typeof url);
var app = express();
var port = process.env.PORT || 8080;
var getPhoto = () => {
	request({
		url: "https://pixabay.com/api/?key=10969015-1ed99dbd833d6cb84c37e1d42&q=yellow+flowers",
		json: true
	}, (error, response, body) => {
		for (i = 0; i < body.hits.length;i++) {
			url.push(body.hits[i].webformatURL)
		}
})};

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/views'));

hbs.registerHelper('fetchImage', () => {
	getPhoto();
	return url	
});

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
	response.render('index.hbs', {
		title: 'Home Page',
		link1: '/weather',
		link2: '/image',
		title1: 'Weather',
		title2: 'Image gallery'
	})
});

app.get('/weather', (request,response) => {
	response.render('weather.hbs', {
		title: 'Weather',
		link1: '/',
		link2: '/image',
		title1: 'Home page',
		title2: 'Image gallery'
	});
})

app.get('/image', (request,response) => {
	response.render('image.hbs', {
		title: 'Image Page',
		link1: '/',
		link2: '/weather',
		title1: 'Home page',
		title2: 'Weather'
	})
})

app.listen(port, () => {
	console.log('Server up on port 8080');
})