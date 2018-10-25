import Books from './BookModel'

export const typeDefs = `
  type Book {
    title: String
    author: Author
  }
`

export const resolvers = {
  allBooks: () => Books.find(),
  book: title => Books.findOne(title)
}
