# Convert a Normal JavaScript Express App to TypeScript Express App

This project is a TypeScript version of an Express server.

## 1. Start with a JavaScript Express project

If you already have a JS app, you can keep your existing structure.

Typical starting structure:

```text
my-express-app/
  package.json
  index.js
```

## 2. Install runtime dependency (if not already installed)

```bash
npm install express
```

## 3. Install TypeScript and required dev dependencies

```bash
npm install -D typescript ts-node @types/node @types/express
```

What these packages do:

- `typescript`: compiles `.ts` to `.js`
- `ts-node`: runs TypeScript directly during development
- `@types/node`: TypeScript type definitions for Node.js
- `@types/express`: TypeScript type definitions for Express

## 4. Create TypeScript config (`tsconfig.json`)

Generate it:

```bash
npx tsc --init
```

Then update key options like this:

```jsonc
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## 5. Move JavaScript source into `src` and rename to `.ts`

Example:

- `index.js` -> `src/index.ts`

## 6. Update your Express code with TypeScript types

Example conversion:

```js
// Before (JavaScript)
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

```ts
// After (TypeScript)
import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT: number = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## 7. Update scripts in `package.json`

Recommended scripts:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "npm run build && node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
}
```

## 8. Build and run

Production-style run:

```bash
npm start
```

Development run (without manual build):

```bash
npm run dev
```

## 9. Final structure after conversion

```text
ts-node-app/
  package.json
  tsconfig.json
  src/
    index.ts
  dist/
```

## Notes

- Keep all source code in `src`.
- Generated JavaScript should go to `dist`.
- TypeScript catches type errors during development, reducing runtime bugs.
