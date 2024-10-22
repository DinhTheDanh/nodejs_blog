const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongose');
class SiteController {
    //[GET] /home
    index(req, res, next) {
        Course.find({})
            .then(function (courses) {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(function (err) {
                next(err);
            });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
