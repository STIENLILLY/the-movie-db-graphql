import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';

const allTypes = fileLoader(path.join(__dirname, '/graphql/**/*.graphql'));

const allResolvers = fileLoader(path.join(__dirname, '/graphql/**/*.resolver.*'));

const schema: any = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers),
});

export default schema;
