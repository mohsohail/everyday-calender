const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'dev';
let connectionString;

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

switch (env) {
  case 'dev':
    connectionString = `mongodb+srv://admin:admin@cluster0-exqy0.mongodb.net/test?retryWrites=true&w=majority`;
    break;
  case 'staging':
    connectionString = `mongodb+srv://admin:admin@cluster0-exqy0.mongodb.net/test?retryWrites=true&w=majority`;
    break;
  case 'pre_prod':
    connectionString = `mongodb+srv://admin:admin@cluster0-exqy0.mongodb.net/test?retryWrites=true&w=majority`;
    break;
  case 'prod':
    connectionString = `mongodb+srv://admin:admin@cluster0-exqy0.mongodb.net/test?retryWrites=true&w=majority`;
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
  console.log({ message: 'MongoDB - Connection Established' });
});

module.exports = mongoose;
