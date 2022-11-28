const express = require('express');
const expressGraphQl = require('express-graphql');
const port = 4800;
const app = express();
const schema = require('./schema/schema');
const cors = require('cors');

// Allow cross-origin
app.use(cors());

app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}) )

app.listen(port, () => {
    console.log(`listing to port ${port}`)
})
