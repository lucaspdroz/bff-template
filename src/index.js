const fastify = require('fastify');
const cors = require('@fastify/cors');

const app = fastify();
app.register(cors);

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', async () => {
  return { hello: 'world' };
});

app.get('/user/:id', async (request, reply) => {
  const { id } = request.params;
  const { token } = request.query;

  // Verify the token for authentication
  if (token !== process.env.PRIVATE_TOKEN) {
    reply.status(401).send({ message: 'Unauthorized' });
    return;
  }

  // Convert id to integer
  const userId = parseInt(id, 10);

  // Retrieve user data from the database using Prisma
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    reply.status(404).send({ message: 'User not found' });
    return;
  }

  return user;
});

// Start the app server
const start = async () => {
  try {
    await app.listen(process.env.APP_PORT);
    console.log(`Server listening on http://localhost:${process.env.APP_PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
