import * as BookLoader from './BookLoader';
import Books from './BookModel'

export const typeDefs = `
  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  // books: () => BookLoader.loadAllBooks(),
  allBooks: () => Books.find(),
  book: (title) => Books.findOne(title),
};