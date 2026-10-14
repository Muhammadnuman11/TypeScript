# TypeScript Learning Journey

A hands-on learning repository for building a strong TypeScript foundation and
practicing it in React. The examples use a chai shop theme, from basic types and
functions to typed React components and forms.

## What you will learn

### TypeScript fundamentals

Work through the files in `src/` in this order:

| Step | File | Topics |
| --- | --- | --- |
| 1 | [`src/index.ts`](src/index.ts) | Functions, parameter types, return types, and a first TypeScript program |
| 2 | [`src/typesInTS.ts`](src/typesInTS.ts) | Type inference, annotations, arrays, object shapes, and `unknown` |
| 3 | [`src/unionAndAny.ts`](src/unionAndAny.ts) | Union types, literal types, optional data, and why to avoid `any` |
| 4 | [`src/typeNarrowing.ts`](src/typeNarrowing.ts) | `typeof` checks, optional parameters, and narrowing unions |
| 5 | [`src/moreTypes.ts`](src/moreTypes.ts) | Type assertions, JSON parsing, and safe handling of `unknown` |
| 6 | [`src/interface.ts`](src/interface.ts) | Interfaces, optional and readonly properties, `type`, and `void` |
| 7 | [`src/oop.ts`](src/oop.ts) | Classes, constructors, access modifiers, and inheritance |

Try changing an example or removing a type annotation to see what TypeScript
infers. Uncomment the lines marked as errors to see the compiler catch invalid
values.

### React + TypeScript practice

The Vite app in [`project_react_ts/`](project_react_ts/) brings those concepts
into a small React project:

- [`src/types.ts`](project_react_ts/src/types.ts) defines the shared `Chai` type.
- [`src/components/ChaiCard.tsx`](project_react_ts/src/components/ChaiCard.tsx)
  practices typed props and optional props.
- [`src/components/ChaiList.tsx`](project_react_ts/src/components/ChaiList.tsx)
  practices typed lists and component composition.
- [`src/components/Counter.tsx`](project_react_ts/src/components/Counter.tsx)
  practices state with `useState`.
- [`src/components/OrderForm.tsx`](project_react_ts/src/components/OrderForm.tsx)
  practices controlled inputs, event types, and callback props.
- [`src/App.tsx`](project_react_ts/src/App.tsx) combines the exercises.

## Getting started

### Requirements

- Node.js and npm
- A code editor with TypeScript support, such as Visual Studio Code

Install dependencies for the TypeScript lessons from the repository root:

```bash
npm install
```

Install dependencies for the React app separately:

```bash
cd project_react_ts
npm install
```

## Run the TypeScript lessons

From the repository root, compile the files in `src/`:

```bash
npm run dev
```

The compiled JavaScript is written to `dist/`. To run the introductory program
after compiling:

```bash
npm start
```

To recompile automatically while editing:

```bash
npx tsc --watch
```

## Run the React app

From `project_react_ts/`, start the Vite development server:

```bash
npm run dev
```

Other useful app commands, also run from `project_react_ts/`:

```bash
npm run build
npm run lint
npm run preview
```

`build` type-checks the app and creates a production build. `lint` runs ESLint,
and `preview` serves the most recent production build locally.

## Suggested practice path

1. Finish the standalone examples in order and make one small change to each.
2. Add a new chai to the React menu and define its shape with the shared type.
3. Add a prop to a component, then make it optional and provide a sensible
   default.
4. Extend the order form with validation and a typed submit handler.
5. Add loading, success, and error states to the data-fetching hook before
   using it in a component.
6. Continue with Next.js: practice the App Router, layouts and pages, typed
   server and client components, route handlers, data fetching, and form
   handling.

## Next.js

Next.js is part of the learning path, but this repository does not currently
contain a Next.js app. The existing React practice project uses Vite. Once the
React fundamentals feel comfortable, create a separate Next.js practice project
and apply the TypeScript concepts there.
