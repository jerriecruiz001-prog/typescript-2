# React to TypeScript Conversion — Checkpoint

A checkpoint exercise demonstrating how to convert React JavaScript components into TypeScript.

---

## Overview

This project takes two existing React components written in plain JavaScript and converts them to TypeScript by adding proper type annotations, interfaces, and configuration.

---

## Components

### Greeting.tsx
A functional component that accepts a `name` prop and renders a greeting message.

**Conversion steps:**
1. Renamed file from `.jsx` to `.tsx`
2. Defined a `GreetingProps` interface to type the `name` prop as a `string`
3. Annotated the function parameter with the interface
4. Added `React.ReactElement` as the return type

### Counter.tsx
A class component with internal state that tracks a count and increments it on button click.

**Conversion steps:**
1. Renamed file from `.jsx` to `.tsx`
2. Defined a `CounterProps` interface (empty — no external props)
3. Defined a `CounterState` interface with `count: number`
4. Passed both interfaces to `Component<CounterProps, CounterState>`
5. Typed the initial state with `CounterState`
6. Typed the `increment` method with a `(): void` return annotation
7. Typed the `render` method with `React.ReactElement`

---

## Project Structure

```
typescript 2/
├── Greeting.tsx       # Functional component (TypeScript)
├── Counter.tsx        # Class component (TypeScript)
├── tsconfig.json      # TypeScript compiler configuration
├── package.json       # Project dependencies
└── README.md
```

---

## Setup

```bash
npm install
```

### Type-check without compiling

```bash
npx tsc --noEmit
```

---

## Key TypeScript Concepts Used

| Concept | Used In |
|---|---|
| `interface` for props | `Greeting.tsx`, `Counter.tsx` |
| `interface` for state | `Counter.tsx` |
| Generic class `Component<P, S>` | `Counter.tsx` |
| Return type `React.ReactElement` | Both files |
| Method return type `void` | `Counter.tsx` |

---

## Dependencies

- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [@types/react](https://www.npmjs.com/package/@types/react)
