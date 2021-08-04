const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

module.exports = { producer };
