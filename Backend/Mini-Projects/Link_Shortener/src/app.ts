import express from 'express';


import LinkRelatedRoute from "./routes/linkRelated.route.js" 


import {errorHandler} from "./middleware/error.middleware.js"
import {notFound} from "./middleware/notFound.middleware.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/link',LinkRelatedRoute);


app.use(notFound);
app.use(errorHandler);


export default app;