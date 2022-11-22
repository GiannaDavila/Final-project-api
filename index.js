//import express
import express from 'express';
//import route functions
import { addNewFood, getAllFood,  updateFood, getOneFood, deleteFood} from './src/food.js';

const app = express();//create a new server instance 

app.use(express.json()); //will recieve json data

//-- define the routes --
app.get('/food', getAllFood);
app.post('/food', addNewFood);
app.patch('/food/:foodId', updateFood)
app.get('/food/:foodId', getOneFood)
app.delete('/food/:foodId', deleteFood)



app.get('/', (req,res) => {
    res.send("hello")
})
const PORT = 3030;//defining the port 


//listen to the server on the specific port 
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));