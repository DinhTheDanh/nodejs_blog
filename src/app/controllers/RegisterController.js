const LoginSignup = require('../models/LoginSignUp');

class RegisterController {
    show(req, res) {
        res.render('register');
    }
    async register(req, res) {
        console.log(req.body);
        const data = {
            email: req.body.email,
            password: req.body.password,
        };
        await LoginSignup.insertMany([data]);
        res.render('login');
    }
}

module.exports = new RegisterController();
