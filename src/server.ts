import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolver'
import path from 'path'

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
