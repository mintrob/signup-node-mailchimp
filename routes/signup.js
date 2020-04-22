const request = require('request');
const keys = require('../config/keys');

module.exports = app => {
	app.get('/', (req,res) => {
		res.render('signup');
	})
	app.post('/signup', (req,res) => {
		const { firstname, lastname, email } = req.body;
		const data = {
			members: [
				{
					email_address: email,
					status: 'subscribed',
					merge_fields: {
						FNAME: firstname,
						LNAME: lastname
					}
				}
			]
		}
		console.log(data);
		const postData = JSON.stringify(data);
		const options = {
			url: 'https://' + keys.mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + keys.listUniqueId,
			method: 'POST',
			headers: {
				Authorization: 'auth ' + keys.mailchimpApiKey
			},
			body: postData
		}
		console.log(options)
		request(options, (err,response,body) => {
			if(err) {
				console.log(err);
				res.send('Error');
			} else {
				if(response.statusCode === 200) {
					console.log(response.statusCode);
					res.render('success');
				} else {
					console.log(response.statusCode);
					res.send('Another Error');
				}
			}
		})
	})
}