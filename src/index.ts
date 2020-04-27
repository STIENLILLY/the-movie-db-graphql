import Fastify from 'fastify';
import GQL from 'fastify-gql';
import schema from './schema';

const app = Fastify();

app.register(GQL, {
    schema,
    jit: 1,
    graphiql: 'playground',
});

app.listen(4000, () => console.log('server running on 4000'));
