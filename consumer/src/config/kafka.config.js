const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'certificate',
});

const consumer = kafka.consumer({ groupId: 'certificate-group' });

module.exports = { consumer };
