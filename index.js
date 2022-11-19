//import express
import express from 'express';
//import route functions
import { addNewFood, getAllFood} from './src/food.js';

const app = express();//create a new server instance 

app.use(express.json()); //will recieve json data

//-- define the routes --
app.get('/food', getAllFood)
app.post('/food', addNewFood);



app.get('/', (req,res) => {
    res.send("hello")
})
const PORT = 3030;//defining the port 


//listen to the server on the specific port 
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));