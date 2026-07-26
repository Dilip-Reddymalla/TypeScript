import express from 'express';
// Type-only import for request/response typing in route handlers.
import type { Request, Response } from 'express';

const app = express();

// Explicit TypeScript type annotation for constants.
const PORT: number = 8080;

// Route handler parameters are typed to get IntelliSense and compile-time checks.
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});