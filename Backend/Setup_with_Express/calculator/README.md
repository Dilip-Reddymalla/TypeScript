# Calculator Express App with TypeScript

This project is a small Express.js application written in TypeScript. It is designed as a learning project for understanding the basics of building a backend API with Express, TypeScript, routing, middleware, and simple request handling.

## What This App Demonstrates

- Creating an Express server in TypeScript
- Using ES modules with `type: "module"`
- Splitting code into routes and middleware
- Reading query parameters from requests
- Returning JSON responses from API endpoints
- Logging each incoming request with custom middleware

## Project Structure

```text
calculator/
  package.json
  tsconfig.json
  src/
    app.ts
    middileware/
      logger.middileware.ts
    routes/
      calculator.route.ts
      health.route.ts
```

## Prerequisites

- Node.js installed
- npm installed

## Install Dependencies

From the `calculator` folder, install packages with:

```bash
npm install
```

## Run the App

Start the development server with:

```bash
npm run dev
```

This uses `tsx watch src/app.ts`, so the server restarts automatically when you change code.

The app runs on port `3000` by default.

## Available Routes

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "OK"
}
```

### Calculator Routes

All calculator routes are mounted under `/calculator` and expect query parameters named `num1` and `num2`.

#### Add

```http
GET /calculator/add?num1=10&num2=5
```

Example response:

```json
{
  "result": "The sum of 10 and 5 is 15"
}
```

#### Subtract

```http
GET /calculator/subtract?num1=10&num2=5
```

Example response:

```json
{
  "result": "The difference between 10 and 5 is 5"
}
```

#### Multiply

```http
GET /calculator/multiply?num1=10&num2=5
```

Example response:

```json
{
  "result": "The product of 10 and 5 is 50"
}
```

#### Divide

```http
GET /calculator/divide?num1=10&num2=5
```

Example response:

```json
{
  "result": "The quotient of 10 and 5 is 2"
}
```

If `num2` is `0`, the API returns an error:

```json
{
  "error": "Division by zero is not allowed"
}
```

## Middleware

A simple logger middleware runs before the routes and prints the request method, URL, and IP address to the console.

## Notes

- Query parameters are converted with `Number(...)`, so non-numeric values will produce `NaN` in the result.
- The app is intended for learning and experimentation, not production use.
- The `middileware` folder name and `logger.middileware.ts` file name follow the existing project naming in this repo.
