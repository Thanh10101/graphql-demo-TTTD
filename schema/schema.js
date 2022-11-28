const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [{
        "id": "1",
        "firstName": "Luong Tran Hy",
        "lastName": "Hien",
        "age": 20
    },
    {
        "id": "2",
        "firstName": "Tran Cong",
        "lastName": "An",
        "age": 20
    },
    {
        "id": "3",
        "firstName": "Nguyen Van",
        "lastName": "Anh",
        "age": 20
    },
    {
        "id": "4",
        "firstName": "Thai Ba",
        "lastName": "Binh",
        "age": 20
    },
    {
        "id": "5",
        "firstName": "Tran Nhat",
        "lastName": "Cuong",
        "age": 20
    },
    {
        "id": "6",
        "firstName": "Thai Nhat",
        "lastName": "Cong",
        "age": 22
    },
    {
        "id": "7",
        "firstName": "Tran Van Thai",
        "lastName": "Duong",
        "age": 11
    },
    {
        "id": "8",
        "firstName": "La Chan",
        "lastName": "Dung",
        "age": 33
    },
    {
        "id": "9",
        "firstName": "Ta Vu",
        "lastName": "Dung",
        "age": 20
    },
    {
        "id": "10",
        "firstName": "Lam Nhat",
        "lastName": "Dat",
        "age": 20
    },
    {
        "id": "11",
        "firstName": "Le Quoc",
        "lastName": "Dat",
        "age": 20
    },
    {
        "id": "12",
        "firstName": "Kiet Tuan",
        "lastName": "Hao",
        "age": 20
    },
    {
        "id": "13",
        "firstName": "Tran Thanh",
        "lastName": "Hai",
        "age": 20
    },
    {
        "id": "14",
        "firstName": "Trinh Hoang",
        "lastName": "Tung",
        "age": 22
    },
    {
        "id": "15",
        "firstName": "Le Duc",
        "lastName": "Toan",
        "age": 11
    },
    {
        "id": "16",
        "firstName": "Nguyen Trinh",
        "lastName": "Thanh",
        "age": 11
    },
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