# Drizzle Todo App

Demonstrates how to use Drizzle with Next.js.

**Tech Stack**

1. Framework: React 18 + Next.js
2. Styling: Tailwind CSS
3. Linting: Code Shaper ESLint configuration
4. Database: PostgreSQL with Drizzle

![Screenshot](assets/screenshot.png)

## Development Build

Copy .env.example to .env.local and set the DATABASE_URL environment variable.

```shell
npm ci
npm run dev
```

Now point your browser to http://localhost:3000

## Production Build

```shell
npm ci
npm run build
npm start
```

Now point your browser to http://localhost:3000

## All Commands

```
npm ci                   # install dependencies
npm run build            # builds all workspaces
npm run clean            # deletes all build artifacts
npm run dev              # run the dev build
npm run fix              # lints, formats and attempts to fix any issues (requires `npm run build` has been ran)
npm run lint             # runs the linter on all workspaces, useful for debugging lint issues (generally `npm run fix` is preferred)
npm start                # run the prod build
```
