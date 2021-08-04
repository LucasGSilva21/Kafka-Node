const { Router } = require('express');
const { KafkaMiddleware } = require('./middlewares/kafka.middleware');
const { CompressionTypes } = require('kafkajs');

const routes = Router();

routes.get('/kafka', KafkaMiddleware, async (req, res) => {
  const message = {
    description: 'teste',
    value: 10,
  };

  await req.producer.send({
    topic: 'kafka-test',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) },
    ],
  });

  return res.json({ message });
});

module.exports = { routes };
