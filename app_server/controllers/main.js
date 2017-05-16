	/*GET home page */
module.exports.index = function(req,res)
	{
		res.render('index', {title: 'NOT Express'});
	};
	/* Get flex page */
module.exports.flex = function(req, res)
	{
		res.render('flex', {title: 'Peaceful Streets Lewis County | Flex Your Rights'});
	};
	/* Get submit page */

module.exports.submit = function(req, res)
	{
		res.render('submit', {title: 'Peaceful Streets Lewis County | Submit Report'});
	};
	/* Get cloud page */

module.exports.cloud = function(req, res)
	{
		res.render('cloudstorage', {title: 'Peaceful Streets Lewis County | Cloud Storage'});
	};