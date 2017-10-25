module.exports.greeting = async (req, reply) => {
  reply.send({ hello: 'world' });
};

module.exports.fuckyou = async (req, reply) => {
  reply.send({ fuck: 'you' });
};
