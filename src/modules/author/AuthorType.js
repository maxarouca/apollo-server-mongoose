import Author from './AuthorModel'

export const typeDefs = `
  type Author {
    name: String
    age: Int
  }
  input AuthorInput {
    name: String!
    age: Int!
  }
`

export const resolvers = {
  allAuthors: () => Author.find(),
  author: name => Author.findOne(name)
}
