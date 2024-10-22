const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const exp = require('constants');
var methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

// Tạo thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

// Bắt được sự submit từ form cụ hể là req.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

app.get(
    '/middleware',
    function (req, res, next) {
        if (['vethuong', ' vevip'].includes(req.query.ve)) {
            return next();
        }
        res.status(403).json({ message: 'access denied' });
    },
    function (req, res) {
        res.json({ message: 'Success!' });
    },
);

// Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Rourtes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
