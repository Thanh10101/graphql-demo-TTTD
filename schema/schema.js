const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    { "id": "1", "firstName": "Luong Tran Hy", "lastName": "Hien", "age": 20 },
    { "id": "2", "firstName": "Tran Cong", "lastName": "Binh", "age": 20 },
    { "id": "3", "firstName": "Bill", "age": 20 },
    { "id": "4", "firstName": "Bill", "age": 20 },
    { "id": "5", "firstName": "Bill", "age": 20 },
    { "id": "6", "firstName": "John", "age": 22 },
    { "id": "7", "firstName": "Andy", "age": 11 },
    { "id": "8", "firstName": "Kerio", "age": 33 },
    { "id": "9", "firstName": "Bill", "age": 20 },
    { "id": "10", "firstName": "Bill", "age": 20 },
    { "id": "11", "firstName": "Bill", "age": 20 },
    { "id": "12", "firstName": "Bill", "age": 20 },
    { "id": "13", "firstName": "Bill", "age": 20 },
    { "id": "14", "firstName": "John", "age": 22 },
    { "id": "15", "firstName": "Andy", "age": 11 },
    { "id": "16", "firstName": "Kerio", "age": 33 },
    { "id": "17", "firstName": "Bill", "age": 20 },
    { "id": "18", "firstName": "Bill", "age": 20 },
    { "id": "19", "firstName": "Bill", "age": 20 },
    { "id": "20", "firstName": "Bill", "age": 20 },
    { "id": "21", "firstName": "Bill", "age": 20 },
    { "id": "22", "firstName": "John", "age": 22 },
    { "id": "23", "firstName": "Andy", "age": 11 },
    { "id": "24", "firstName": "Kerio", "age": 33 },
    { "id": "25", "firstName": "Bill", "age": 20 },
    { "id": "26", "firstName": "Bill", "age": 20 },
    { "id": "27", "firstName": "Bill", "age": 20 },
    { "id": "28", "firstName": "Bill", "age": 20 },
    { "id": "29", "firstName": "Bill", "age": 20 },
    { "id": "30", "firstName": "John", "age": 22 },
    { "id": "31", "firstName": "Andy", "age": 11 },
    { "id": "32", "firstName": "Kerio", "age": 33 }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})