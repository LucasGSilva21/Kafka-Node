const express = require('express');
const { producer } = require('./config/kafka.config');
const { routes } = require('./routes');

const app = express();

app.use(routes);

async function run() {
  await producer.connect();

  app.listen(3333);
}

run().catch(console.error);
