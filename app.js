var request = require('request');
var cheerio = require('cheerio');
var util	= require('util');


request('http://reddit.com/r/smashbros', function (error, response, html) {

	var $ = cheerio.load(html);
	var result = [];
	$('.title').each(function(i, element){

		//scrape some stuff, put it in an object and add it to the result array
		if (element.name === 'a') {
			// console.log('i: '+ i + '\nelement: ' + util.inspect(element));	
			console.log(element.children[0].data);
		}
	});
	console.log(result);
});
