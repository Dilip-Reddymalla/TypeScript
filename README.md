# TypeScript Learning Journey

This repository is my hands-on TypeScript learning space. It combines language fundamentals with small backend implementations so I can practice both TypeScript syntax and real application structure.

## What Is In This Repo

The codebase is organized by topic and by small learning apps.

### TypeScript Fundamentals

- `basics/introduction.ts` - introductory TypeScript syntax and setup
- `basics/types-and-interfaces.ts` - type annotations, primitive types, and interfaces
- `Functions/function-types-rest-overloading.ts` - function types, rest parameters, and overloads
- `Generics/generics.ts` - generic types and reusable components
- `OOP/classes-access-modifiers.ts` - classes and access modifiers
- `OOP/classes-advanced.ts` - advanced class concepts and OOP patterns
- `TypeGuards/type-assertions-and-guards.ts` - type assertions and guard techniques

### Backend / Express Learning Apps

- `Backend/Setup_with_Express/ts-node-app` - a starter TypeScript app that shows how to run TypeScript directly during development
- `Backend/Setup_with_Express/calculator` - an Express + TypeScript API used to practice routing, middleware, and JSON responses

## Calculator App Overview

The calculator app is the main backend implementation in this repository. It demonstrates:

- creating an Express server in TypeScript
- using ES modules with `type: "module"`
- splitting logic into route and middleware files
- reading query parameters from incoming requests
- returning JSON responses from API endpoints
- handling a simple validation rule for division by zero
- logging each request with custom middleware

### Calculator Routes

- `GET /health` - health check endpoint
- `GET /calculator/add?num1=10&num2=5` - add two numbers
- `GET /calculator/subtract?num1=10&num2=5` - subtract two numbers
- `GET /calculator/multiply?num1=10&num2=5` - multiply two numbers
- `GET /calculator/divide?num1=10&num2=5` - divide two numbers, with a check for `num2 = 0`

## What I Have Learned

This repository reflects progress in both TypeScript and backend development. The main ideas practiced so far are:

- strong typing and type annotations
- interfaces, unions, and function typing
- generics and reusable abstractions
- classes, access modifiers, and object-oriented patterns
- type narrowing, assertions, and guards
- Express routing and request handling
- middleware design and request logging
- basic API response design with JSON
- setting up a TypeScript Node.js project with modern tooling

## How To Use

Open any file or app folder and study it as a focused example. Each topic is intentionally small so it can be used as a reference while learning.

For the Express calculator app, install dependencies and run the dev server from its folder:

```bash
cd Backend/Setup_with_Express/calculator
npm install
npm run dev
```

## Notes

- This repository is a work in progress and will keep growing as I learn more TypeScript concepts and backend patterns.
- The code is meant for learning, experimentation, and reference rather than production use.
