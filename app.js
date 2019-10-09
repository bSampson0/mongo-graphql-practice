const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://bnicerrr:oymHWwZfgj5kady3@volunteertracker-svazx.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database.')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, () => {
    console.log('listening on port 4000')
})
