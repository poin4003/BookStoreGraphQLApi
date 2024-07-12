const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Connect database setup
require('./dbs/mongo');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/Resolvers');

// Setup library
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

// Setup Middleware
// app.use(morgan('dev')); 
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send("Server is OK!");
})

server.start().then(() => {
  server.applyMiddleware({ app });
})


module.exports = app;