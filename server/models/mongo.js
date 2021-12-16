const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ttdxr.mongodb.net/myFirstDatabase?retryWrites=true`;

console.log({ uri })
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const isConnected = client.connect();

isConnected.catch(err=> console.log({ err }))

module.exports = {
    client, isConnected
}