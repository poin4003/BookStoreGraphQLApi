const BookModel = require("../models/Book.model");
const AuthorModel = require("../models/Author.model");

const resolvers = {
  // Define a resolvers for query
  Query: {
    // Resolver for books query, return a list of all books by using BookModel
    books: async () => await BookModel.find(),
    // Resolver for authors query, return a list of all authors by using AuthorModel
    authors: async() => await AuthorModel.find(),
    // Resolver for book query by id, return a list of all books by args.id
    book: async(parent, args) => await BookModel.findById(args.id),
    // Resolver for author query by id, return a list of author by args.id
    author: async(parent, args) => await AuthorModel.findById(args.id),
  },
  Mutation: {
    // Resolver for addBook mutation, adding new book and return created book
    addBook: async (parent, args) => {
      const book = new BookModel({ 
        title: args.title, 
        content: args.content,
        createOn: args.createOn,
        language: args.language,
        numberOfPages: args.numberOfPages,
        numberOfChapters: args.numberOfChapters,
        numberOfWords: args.numberOfWords,
        view: args.View,
        authorId: args.authorId 
      });
      return await book.save();
    },
    // Resolver for addAuthor mutation, adding new author and return created author
    addAuthor: async (parent, args) => {
      const author = new AuthorModel({ 
        fullName: args.fullName,
        email: args.email,
        password: args.password,
        role: args.role,
        phone: args.phone,
        accessTime: args.accessTime,
        birthday: args.birthday,
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        bio: args.bio
      });
      return await author.save();
    },
  },
  // Resolver for relationship of book and author, return author by authorId in Book
  Book: {
    author: async (parent) => await AuthorModel.findById(parent.authorId),
  },
  // Resolver for relationshop of author and book, return a list of books by authorId in Parent
  Author: {
    books: async (parent) => await BookModel.find({ authorId: parent.id }),
  },
};

module.exports = resolvers;