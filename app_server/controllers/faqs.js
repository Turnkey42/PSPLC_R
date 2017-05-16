/* Get about page */
module.exports.about = function(req, res)
	{
		res.render('about', {title: 'About'});
	};
/* Get about page */
module.exports.contact = function(req, res)
	{
		res.render('contact', {title: 'Contact'});
	};
