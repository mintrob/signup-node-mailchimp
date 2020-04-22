module.exports = app => {
	app.get('/', (req,res) => {
		res.render('signup');
	})
	app.get('/success', (req,res) => {
		res.render('success');
	})
}