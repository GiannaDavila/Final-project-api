// import MongoClient and ServerApiVersion from mongo
// import MongoClient- Nodejs library that handles connecting to and interacting with MongoDB database.
import { MongoClient } from 'mongodb';

import 'dotenv/config'

//create new MongoClient instance and export it 
export function dbConnect() {
    const client = new MongoClient(process.env.MONGO_URI);
    // const client = new MongoClient(uri);
    return client.db("FinalProject");
}