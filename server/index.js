const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./routes/api.route');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/', apiRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
