import React from "react";

import { Overlay } from "./Overlay";

const fakeSpinner = React.createElement("p", undefined, "FAKE SPINNER");

export default {
  title: "Example/Overlay",
  component: Overlay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const NoProps = {
  args: {
    mode:1,
  },
};

export const ActiveWithText = {
  args: {
    mode:1,
    active: true,
    text: "Loading your fake content ...",
  },
};

export const WithSpinner = {
  args: {
    mode:2,
    active: true,
    spinner: true,
  },
};

export const NoFade = {
  args: {
    mode:2,
    text: "No fade when toggled",
    fadeSpeed: 0,
  },
};

export const WithSpinnerAndText = {
  args: {
    mode:2,
    active: true,
    spinner: true,
    text: "Loading stuff ...",
  },
};

export const WithCustomSpinner = {
  args: {
    mode:2,
    active: true,
    spinner: fakeSpinner,
    text: "Loading stuff ...",
  },
};

export const StylesProp = {
  args: {
    mode:2,
    active: true,
    spinner: true,
    styles: {
      wrapper: (base, props) => ({
        ...base,
        width: 300,
        height: 200,
        overflow: props.active ? "hidden" : "scroll",
      }),
      overlay: (base) => ({
        ...base,
        background: "rgba(0, 0, 255, 0.5)",
      }),
      spinner: (base) => ({
        ...base,
        width: "100px",
        "& svg circle": {
          stroke: "#FF0000",
        },
      }),
    },
  },
};

export const StyledComponents = {
  args: {
    mode:3,
    active: true,
    spinner: true,
    classNamePrefix: "myOverlay_",
  },
};