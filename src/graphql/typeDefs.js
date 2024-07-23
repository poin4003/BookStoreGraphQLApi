const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    content: String!
    createOn: String!
    language: String!
    numberOfPages: Int!
    numberOfChapters: Int!
    numberOfWords: Int!
    view: Int
    author: Author 
  }

  type Author {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    role: Int!
    phone: String!
    accessTime: Int
    birthday: String!
    accessToken: String!
    refreshToken: String!
    bio: String!
    books: [Book] 
  }

  type Query {
    books: [Book] 
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    addBook(
      title: String!,
      content: String!,
      createOn: String!,
      language: String!,
      numberOfPages: Int!,
      numberOfChapters: Int!,
      numberOfWords: Int!,
      view: Int,
      authorId: ID!
    ): Book
    
    updateBook(
      id: ID!,
      title: String,
      content: String,
      createOn: String,
      language: String,
      numberOfPages: Int,
      numberOfChapters: Int,
      numberOfWords: Int,
      view: Int,
      authorId: ID
    ): Book

    deleteBook(id: ID!): Book
    
    addAuthor(
      fullName: String!,
      email: String!,
      password: String!,
      role: Int,
      phone: String!,
      accessTime: Int,
      birthday: String!,
      accessToken: String!,
      refreshToken: String!,
      bio: String!
    ): Author

    updateAuthor(
      id: ID!,
      fullName: String,
      email: String,
      password: String,
      role: Int,
      phone: String,
      accessTime: Int,
      birthday: String,
      accessToken: String,
      refreshToken: String,
      bio: String
    ): Author

    deleteAuthor(id: ID!): Author
  }

`;

module.exports = typeDefs;