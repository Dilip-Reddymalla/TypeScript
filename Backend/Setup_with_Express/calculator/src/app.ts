import express from 'express';

import healthRoute from './routes/health.route.js';
import calculatorRoute from './routes/calculator.route.js';
import logger from './middileware/logger.middileware.js';


const app = express();
const PORT = 3000;
    
app.use(logger);
app.use(healthRoute);
app.use('/calculator', calculatorRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
