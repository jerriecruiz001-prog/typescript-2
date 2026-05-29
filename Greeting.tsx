import React from 'react';

/**
 * STEP 1: Define a TypeScript interface for the component's props.
 *
 * In JavaScript, props had no type — you could pass anything.
 * Here we declare that `name` must be a string. If you pass a number
 * or forget the prop entirely, TypeScript will flag it as an error
 * before the code even runs.
 */
interface GreetingProps {
  name: string;
}

/**
 * STEP 2: Type the function parameter using the interface.
 *
 * We replace the plain `({ name })` with `({ name }: GreetingProps)`.
 * This tells TypeScript: "this function expects an object that matches
 * the GreetingProps shape."
 *
 * We also annotate the return type as `JSX.Element` — the type that
 * represents a piece of React UI. This is optional (TypeScript can
 * infer it), but it makes the contract explicit and readable.
 */
const Greeting = ({ name }: GreetingProps): React.ReactElement => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
