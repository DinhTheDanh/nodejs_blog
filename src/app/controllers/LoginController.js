const LoginSignup = require('../models/LoginSignUp');

class LoginController {
    show(req, res) {
        res.render('login');
    }
    login(req, res) {
        LoginSignup.findOne({ email: req.body.email })

            .then(check => {
                if (check.password === req.body.password) {
                    res.redirect('/me/stored/courses');
                }
            });
    }
}

module.exports = new LoginController();
