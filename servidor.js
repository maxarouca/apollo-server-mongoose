const mongoose = require('mongoose')
const mongo = 'mongodb://apollo:apollo123@ds215822.mlab.com:15822/apolloserver'

// schemas

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String },
  age: { type: Number },
}, { collection: "authors" });

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

const booksSchema = new Schema({
  title: { type: String },
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
   },
}, { collection: "books" });


const author = Author.find()
console.log(author)



mongoose
  .connect(
    mongo,
    { useNewUrlParser: true }
  )
  .then(() => {
		console.log(`🚀  Mongo ready`)
  })
  .catch(e => console.log(e));