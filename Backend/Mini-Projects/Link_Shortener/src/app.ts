import express from 'express';


import LinkRelatedRoute from "./routes/linkRelated.route.js" 

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/link',LinkRelatedRoute);


export default app;