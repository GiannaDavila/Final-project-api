// import MongoClient and ServerApiVersion from mongo
import { MongoClient, ServerVersion } from 'mongodb'; 

//import secret uri 
import { uri } from '../secret.js';

//create new MongoClient instance and export it 
export const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerVersion.v1
});