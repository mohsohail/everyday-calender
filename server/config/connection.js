const mongoose = require('mongoose');
// const env = process.env.NODE_ENV;
const env = 'dev';
let connectionString;

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

switch (env) {
  case 'dev':
    connectionString = `mongodb://localhost:27017/delivery`;
    break;
  case 'staging':
    connectionString = `mongodb://localhost:27017/delivery`;
    break;
  case 'pre_prod':
    connectionString = `mongodb://localhost:27017/delivery`;
    break;
  case 'prod':
    connectionString = `mongodb://localhost:27017/delivery`;
    break;
}

mongoose.connect(connectionString).catch(e => {
  console.error({ error: e });
});

const connection = mongoose.connection;
connection.on('error', e => {
  console.log({ error: e });
});
connection.once('open', () => {
  console.log({ message: 'MongoDB connection established' });
});

module.exports = mongoose;
