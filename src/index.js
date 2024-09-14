const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const exp = require('constants');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template Engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Rourtes init
route(app);

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
