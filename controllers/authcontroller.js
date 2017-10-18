var exports = module.exports = {}
 
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
 
exports.dashboard = function(req, res) {
 
    res.render('fipdev');
 
}


exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}