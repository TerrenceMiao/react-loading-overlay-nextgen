/* global jest, describe, it, expect, afterEach */
import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

import "jsdom-global/register";

import LoadingOverlay from "../src";

jest.useFakeTimers();

afterEach(cleanup);

// class DelayedInactive extends Component<LoadingOverlayProps> {
//   let timer: number;

//   constructor(props: LoadingOverlayProps) {
//     super(props);
//     this.state = { active: true };
//   }
//   componentDidMount() {
//     this.timer = setTimeout(() => this.setState({ active: false }), 600);
//   }
//   componentWillUnmount() {
//     clearTimeout(this.timer);
//   }
//   render() {
//     return <LoadingOverlay {...this.props} active={this.state.active} />;
//   }
// }

describe("Loader DOM state", () => {
  it("is not in DOM initially if active:false", () => {
    const { getByTestId } = render(<LoadingOverlay />);
    expect(getByTestId("wrapper").children.length).toBe(0);
  });

  it("is in DOM initially if active:true", () => {
    const { getByTestId } = render(<LoadingOverlay active />);
    expect(getByTestId("wrapper").children.length).toBe(1);
  });

  it("supports click events on overlay", () => {
    let clicked = false;
    const { getByTestId } = render(
      <LoadingOverlay
        active
        onClick={() => {
          clicked = true;
        }}
      />
    );
    fireEvent.click(getByTestId("overlay"));
    expect(clicked).toBe(true);
  });

  it("removes self from DOM when not active", () => {
    const { getByTestId } = render(<LoadingOverlay />);
    expect(getByTestId("wrapper").children.length).toBe(1);
    jest.runAllTimers();
    expect(getByTestId("wrapper").children.length).toBe(0);
  });

  it("remains in dom when inactive if animate is true", () => {
    const { getByTestId } = render(<LoadingOverlay />);
    expect(getByTestId("wrapper").children.length).toBe(1);
    jest.runOnlyPendingTimers();
    expect(getByTestId("wrapper").children.length).toBe(1);
    jest.runAllTimers();
    expect(getByTestId("wrapper").children.length).toBe(0);
  });
});
