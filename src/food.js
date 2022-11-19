// import mongoClient 
import { client } from './dbconnect.js';

//get all food: GET 
export const getFood = ( req, res ) => {
    client.connect((err) => {
        if(err){
            res.status(500).send(err);
            return;
        }
        const collection = client.db('test').collection('food');
        collection.find().toArray((err, result) => {
            if(err) res.status(500).send(err);
            if(result) res.json(result);
            client.close();
        });
    });
};