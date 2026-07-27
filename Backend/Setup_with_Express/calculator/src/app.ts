import express from 'express';
import type { Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req:Request, res:Response)=>{
    res.send('Hello, World!');
})

app.get('/:id', (req:Request, res:Response)=>{
    console.log(`Query parameter ID: ${JSON.stringify(req.query)}`);
    res.send(`You requested ID: ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
