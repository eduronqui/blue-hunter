const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRouter = require('./routers/user-router');
const bookRouter = require('./routers/book-router');
const healthcheckRouter = require('./routers/healthcheck-router');

const seed = require('./seed/seed');

module.exports = (app) => {
  configureParams(app);
  configureDB(app);
  configureMiddlewares(app);
  configureRoutes(app);
}

function configureMiddlewares(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('combined'));
}

function configureParams(app) {
  app.set('port', process.env.PORT || 3000);
  app.set('mongodb', process.env.MONGODB || '192.168.99.100')

  mongoose.Promise = global.Promise;
  mongoose.set('debug', app.get('env') === 'development');
}

function configureRoutes(app) {
  userRouter(app);
  bookRouter(app);
  healthcheckRouter(app);
}

function configureDB(app) {
  mongoose.connect(`mongodb://${app.get('mongodb')}:27017/blue-hunter`, {
    useMongoClient: true
  });

  mongoose.connection
    .on('error', console.error.bind(console, '[Mongoose] '))
    .once('connected', () => {
      console.log(`Mongoose connected to mongodb in ${mongoose.connection.host}:${mongoose.connection.port}`);
      seed();
    });
}