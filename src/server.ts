import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

const port = env.PORT;

// connect mongoose to MongoDB
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');

    app.listen(port, () => {
      console.log(`Running on port: ${port}`);
    });
  })
  .catch(console.error);
