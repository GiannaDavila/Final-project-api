// import MongoClient and ServerApiVersion from mongo
// import MongoClient- Nodejs library that handles connecting to and interacting with MongoDB database.
import { MongoClient } from 'mongodb';

//import secret uri 
import { uri } from '../credentials.js';

//create new MongoClient instance and export it 
export function dbConnect() {
    const client = new MongoClient(uri);
    return client.db("FinalProject");
}