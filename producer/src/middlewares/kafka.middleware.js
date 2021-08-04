const { producer } = require('../config/kafka.config');

const KafkaMiddleware = (req, res, next) => {
  req.producer = producer;

  return next();
};

module.exports = { KafkaMiddleware };
