    // var express = require('express');
    // var app = express();
    // var vhost = require('vhost');
    // var router = express.Router();
    // var mongoose = require('mongoose');
    // var subdomain = require('express-subdomain');
    // var bodyParser = require('body-parser');
    // var helmet = require('helmet');
    // var flash = require('req-flash');
    // var cors = require('cors')
    // var session = require('express-session');
    // var favicon = require('serve-favicon');
    // var MongoStore = require('connect-mongo')(session);
    
    
    // var middlewares = require("./../../../app/middlewares/middleware.js");
    // var controllerLogic = require('./../../../app/controllers/logic/controllerLogic.js');
    
    
    
    // app.set('view engine', 'ejs');
    // app.set('trust proxy', 1);
    
    
    // mongoose.connect(process.env.MONGOOSE_CONNECT);
    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //     console.log("MONGODB connected");
    // });
    
    
    
    // // app.use(helmet());
    // // app.use(favicon('./public/img/favicon.png'));
    // // app.use(bodyParser.urlencoded({ extended: true }));
    // // app.use(bodyParser.json());
    // app.use(express.static(__dirname + '/public'));
    
    // app.get('/ping', function (req, res) {
    //   res.send('successfuly pinged');
    // });
    
    // app.use(session({
    //     name: '13chanAuth',
    //     genid: function(req) {
    //     return require('crypto').randomBytes(48).toString('hex');
    //     },
    //     rolling: true,
    //     secret: 'process.env.COOKIE_SESS_SECRET',
    //     resave: false,
    //     saveUninitialized: false,
    //     domain: '13chan.co',
    //     cookie: { 
    //         secure: true,
    //         maxAge: null,
    //         httpOnly: true //http://expressjs.com/en/advanced/best-practice-security.html
    //     },
    //     store: new MongoStore({ mongooseConnection: mongoose.connection })
    // }));
    // app.use(middlewares.prettifyDomain);
    // app.use(flash());
    // app.use(controllerLogic.flashAll);
    
    
    // app.get('/', function (req, res) {
    //   res.render('./pages/main/about.ejs');
    // });
    
    
    
    // // require('./app/controllers/router/routes.js')(router);
    // // app.use(subdomain('b', router));
    // // router.use(middlewares.notABoard);
    
    // // //flash is not working past below, no clue why...
    
    // // require('./app/controllers/routes/boards.js')(app);
    // // require('./app/controllers/routes/user.js')(app);
    // // require('./app/controllers/routes/main.js')(app); //must run last as 404 page is there
    
    
    
    
    // // app.listen(process.env.PORT || 80);
        