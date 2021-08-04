const { consumer } = require('./config/kafka.config');

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'kafka-test' });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`[ topic: ${topic} - partition: ${partition} | message: ${message.value} ]`);
    },
  })
}

run().catch(console.error);
