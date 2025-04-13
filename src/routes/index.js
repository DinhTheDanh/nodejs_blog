const newRouter = require('./news');
const meRouter = require('./me');
const loginRouter = require('./login');
const registerRouter = require('./register');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
