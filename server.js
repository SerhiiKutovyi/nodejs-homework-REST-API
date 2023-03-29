const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, err => {
      if (err) console.error('Error at aserver launch:', err);
      console.log(`Database connection successful: PORT-${PORT}!`);
    })
  )
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
