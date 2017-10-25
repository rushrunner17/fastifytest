const fastify = require('fastify')();
const greetingRoutes = require('./greeting');

module.exports = async () => {
  fastify.register([
    greetingRoutes.greeting
  ]);

  fastify.listen(3000, (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
  });
};
