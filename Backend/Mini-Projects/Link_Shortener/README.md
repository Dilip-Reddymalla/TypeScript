# Link Shortener API

A TypeScript-based URL shortener backend built with Express and MongoDB. The project currently supports creating short links from long URLs and storing them with metadata such as short code, click count, expiry, and tier.

## Features

- Create short URLs from long URLs
- Generate unique short codes using nanoid
- Store URLs in MongoDB with metadata
- Track click count for each shortened URL
- Support for expiration date and tier-based metadata
- REST API structure with controllers, services, repositories, and models

## Tech Stack

- Node.js
- TypeScript
- Express.js
- MongoDB + Mongoose
- dotenv
- nanoid
- tsx

## Project Structure

```text
Link_Shortener/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── db.ts
│   │   └── env.ts
│   ├── controllers/
│   │   └── url.controller.ts
│   ├── models/
│   │   └── Url.model.ts
│   ├── repositories/
│   │   └── url.repository.ts
│   ├── routes/
│   │   └── linkRelated.route.ts
│   ├── services/
│   │   └── url.service.ts
│   ├── utils/
│   │   └── generateShortCode.ts
│   └── validators/
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- npm installed
- A MongoDB database available locally or in MongoDB Atlas

## Installation

1. Navigate to the project folder:

```bash
cd Link_Shortener
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the following values:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/link-shortener
NODE_ENV=development
```

> Replace the MongoDB URI with your own local or cloud MongoDB connection string.

## Running the Project

### Development mode

```bash
npm run dev
```

This starts the server using `tsx watch` and will automatically restart when files change.

### Production build

```bash
npm run build
```

### Start built app

```bash
npm start
```

## Available Scripts

```json
{
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

## API Endpoints

### Create a shortened URL

- Method: `POST`
- Path: `/link/shorten`

#### Request body

```json
{
  "originalUrl": "https://example.com"
}
```

#### Response example

```json
{
  "success": true,
  "data": {
    "originalUrl": "https://example.com",
    "shortCode": "A1b2C3d",
    "expiresAt": "2026-08-29T12:00:00.000Z",
    "tier": "free",
    "isActive": true,
    "clicks": 0,
    "_id": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Port on which the server runs (default: `3000`) |
| `MONGODB_URI` | MongoDB connection string |
| `NODE_ENV` | Application environment (`development` / `production`) |

## Current Implementation Details

The project currently includes:

- An Express app entry point in `src/app.ts`
- A server startup file in `src/server.ts`
- Environment configuration in `src/config/env.ts`
- MongoDB connection logic in `src/config/db.ts`
- A URL model in `src/models/Url.model.ts`
- A controller, service, and repository layer for URL creation
- A short code generator using `nanoid`

## Notes

- The current API supports shortening URLs only.
- Short codes are generated automatically and checked for uniqueness before being stored.
- The app expects a valid MongoDB connection before starting successfully.

## Example Usage

You can test the API with curl:

```bash
curl -X POST http://localhost:3000/link/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl":"https://example.com"}'
```

## Future Improvements

Possible enhancements for the project include:

- Redirecting short codes to the original URL
- URL analytics and click tracking dashboards
- Custom short aliases
- Authentication and user accounts
- Expiration handling and cleanup jobs
