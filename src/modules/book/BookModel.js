import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number }
  },
  { collection: 'authors' }
)

const booksSchema = new Schema(
  {
    title: { type: String },
    author: authorSchema
  },
  { collection: 'books' }
)

const Books = mongoose.models.Books || mongoose.model('Books', booksSchema)

module.exports = Books
