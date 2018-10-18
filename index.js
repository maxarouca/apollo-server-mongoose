import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose'
const mongo = 'mongodb://apollo:apollo123@ds215822.mlab.com:15822/apolloserver'

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';
import Books from './src/mongo/index'

const SchemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

const typeDefs = [
  BookType.typeDefs,
  AuthorType.typeDefs,
]

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers
  },
  Mutation: {
    addBook: (root, args, { Books }) => Books.create(args)
  }
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
})

const server = new ApolloServer({
  schema, context: ({ req }) => ({
    Books
  })
});

mongoose
  .connect(
    mongo,
    { useNewUrlParser: true }
  )
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(e => console.log(e));