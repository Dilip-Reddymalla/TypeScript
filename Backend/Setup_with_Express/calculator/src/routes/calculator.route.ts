import Router from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.get('/add', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
  // Implementation for calculator logic
  const result = Number(num1) + Number(num2);
  res.status(200).json({ result: `The sum of ${num1} and ${num2} is ${result}` });
});

router.get('/subtract', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
    // Implementation for calculator logic
  const result = Number(num1) - Number(num2);
  res.status(200).json({ result: `The difference between ${num1} and ${num2} is ${result}` });
});

router.get('/multiply', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
    // Implementation for calculator logic
  const result = Number(num1) * Number(num2);
  res.status(200).json({ result: `The product of ${num1} and ${num2} is ${result}` });
});

router.get('/divide', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
    if (Number(num2) === 0) {
    res.status(400).json({ error: 'Division by zero is not allowed' });
    return;
  }
  const result = Number(num1) / Number(num2);
  res.status(200).json({ result: `The quotient of ${num1} and ${num2} is ${result}` });
});

export default router;