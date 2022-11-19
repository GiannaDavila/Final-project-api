//import express
import express from 'express';

//import route functions
import { getFood, addFood } from './src/food.js'

//create a new server instance 
const app = express();

//defining the port 
const PORT = 3333;

//will recieve json data
app.use(express.json());

//-- define the routes --
//get all food from db
app.get('/food', getFood);

//create new food
app.post('/food', addFood);

//listen to the server on the specific port 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});