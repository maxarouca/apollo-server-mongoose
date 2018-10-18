import * as BookLoader from './BookLoader';
import { Books } from '../../mongo';

export const typeDefs = `
  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  // books: () => BookLoader.loadAllBooks(),
  books: () => Books.find(),
};