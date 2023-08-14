require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//db
const connectDB = require('./db/connect');

// authenticate middleware
const autheticateUser = require('./middleware/authentication');

//router
const mainRouter = require('./routes/main');
const profileRouter = require('./routes/Profile');
const feedRouter = require('./routes/feed');

//error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1/auth', mainRouter);
app.use('/api/v1/profile', autheticateUser, profileRouter);
app.use('/api/v1/feed', autheticateUser,feedRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();