// import mongoClient 
import { dbConnect } from './dbConnect.js';

//Create food: POST
export async function addNewFood (req,res){
    const newFood = req.body
    const db = dbConnect()
    await db.collection('food').insertOne
    (newFood)
    .catch(err => {
        res.status(500).send(err)
        return
    })
    res.status(201).send({message: "New Food Added."})
}

export async function getAllFood(req, res){
    const db = dbConnect()
    const collection = await
    db.collection('food').find().toArray()
    res.send(collection)
}