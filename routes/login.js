
/*
 * GET login page.
 */

exports.login = function(req, res){
  res.render('login', {
      username: req.param('name')
  });
};