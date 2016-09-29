//https://blog.risingstack.com/node-js-security-checklist/
var express = require('express');
var app = express();
var vhost = require('vhost');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var subdomain = require('express-subdomain');
var helmet = require('helmet');
var flash = require('req-flash');
var cors = require('cors');
var session = require('express-session');
var favicon = require('serve-favicon');
var MongoStore = require('connect-mongo')(session);
var router = express.Router();
var vhost = require('vhost');


var middlewares = require("./app/middlewares/middleware.js");
var controllerLogic = require('./app/controllers/logic/controllerLogic.js');

//app.set('views', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);


mongoose.connect(process.env.MONGOOSE_CONNECT);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("MONGODB connected");
});

app.use(cors({credentials: true, origin: true}));
app.use(helmet());
app.use(favicon('./public/img/favicon.png'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/test/ping', function (req, res) {
  res.send('successfuly pinged(kinda)!');
});
app.use(session({
    name: '13chanAuth',
    genid: function(req) {
    return require('crypto').randomBytes(48).toString('hex');
    },
    rolling: true,
    secret: process.env.COOKIE_SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    //domain: '13chan.co',
    cookie: { 
        test: 'help',
        secure: true,
        maxAge: null,
        httpOnly: true //http://expressjs.com/en/advanced/best-practice-security.html
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(cors({credentials: true, origin: true}));
app.use(middlewares.prettifyDomain);
app.use(flash());
app.use(controllerLogic.flashAll);
app.use(vhost('mail.example.com', function (req, res) {
  // handle req + res belonging to mail.example.com
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello from mail!')
}))
app.use(subdomain('b', router));
require('./app/controllers/router/routes.js')(router);

//require('./libs/vhost/b.app.js').app;
//app.use(vhost('b.13chan.co', require('./libs/vhost/b.app.js').app));


require('./app/controllers/routes/boards.js')(app);
require('./app/controllers/routes/user.js')(app);
require('./app/controllers/routes/main.js')(app);



app.listen(process.env.PORT || 80);
