import * as AuthorLoader from './AuthorLoader';
import Author from './AuthorModel'

export const typeDefs = `
  type Author {
    name: String
    age: Int
  }
`;

export const resolvers = {
  // authors: () => AuthorLoader.loadAllAuthors(),
  allAuthors: () => Author.find(),
  author: (name) => Author.findOne(name),

};
