import React, { Component } from 'react';

/**
 * STEP 1: Define an interface for Props.
 *
 * This component receives no props from outside, so the interface
 * is empty. We still declare it because Component<Props, State>
 * requires both type arguments — leaving it out would cause an error.
 */
interface CounterProps {}

/**
 * STEP 2: Define an interface for State.
 *
 * `count` is a number. TypeScript will now catch mistakes like
 * accidentally setting count to a string (e.g. "0" instead of 0).
 */
interface CounterState {
  count: number;
}

/**
 * STEP 3: Pass both interfaces to the Component generic.
 *
 * `Component<CounterProps, CounterState>` wires TypeScript into
 * both `this.props` and `this.state`. Now `this.state.count` is
 * known to be a number, and `this.setState({ count: ... })` is
 * type-checked against CounterState.
 */
class Counter extends Component<CounterProps, CounterState> {

  /**
   * STEP 4: Type the initial state.
   *
   * TypeScript infers the type from CounterState, so declaring
   * `state` here satisfies the required initial state contract.
   */
  state: CounterState = {
    count: 0,
  };

  /**
   * STEP 5: Type the class method.
   *
   * Arrow functions used as class fields are typed by their return value.
   * `(): void` means "takes no arguments and returns nothing."
   * This documents intent clearly and prevents accidental returns.
   */
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  /**
   * STEP 6: Type the render method.
   *
   * `render()` returns JSX, which TypeScript types as `JSX.Element`.
   * The JSX itself is unchanged — TypeScript only adds the return type annotation.
   */
  render(): React.ReactElement {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
