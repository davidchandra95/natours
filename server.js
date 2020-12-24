const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB_URI = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db connection successful');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
