const greetingApi = require('../apis/greeting');

module.exports.greeting = async (fastify) => {
  const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {
              type: 'string'
            }
          }
        }
      }
    }
  };
  fastify.get('/greeting', opts, greetingApi.greeting);
  fastify.get('/fuckyou', opts, greetingApi.fuckyou);
};
