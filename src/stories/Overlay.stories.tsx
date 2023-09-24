import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Overlay from "./Overlay";

const fakeSpinner = React.createElement("p", undefined, "FAKE SPINNER");

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Loading Overlay",
  component: Overlay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "text", description: "mode" },
    active: {
      control: "boolean",
      description: "active flag",
      table: { defaultValue: { summary: "false" } },
    },
    spinner: {
      control: "boolean",
      description: "spinner flag",
      table: { defaultValue: { summary: "false" } },
    },
    fadeSpeed: { control: "text", description: "fade speed" },
    text: { control: "text", description: "text" },
    styles: { control: "object", description: "overlay styles" },
    classNamePrefix: {
      control: "text",
      description: "styles class name prefix",
    },
  },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoProps: Story = {
  name: "No Props",
  args: {
    mode: 1,
  },
};

export const ActiveWithText: Story = {
  name: "Active with text",
  args: {
    mode: 1,
    active: true,
    text: "Loading your fake content ...",
  },
};

export const WithSpinner: Story = {
  name: "With Spinner",
  args: {
    mode: 2,
    active: true,
    spinner: true,
  },
};

export const NoFade: Story = {
  name: "No Fade",
  args: {
    mode: 2,
    text: "No fade when toggled",
    fadeSpeed: 0,
  },
};

export const WithSpinnerAndText: Story = {
  name: "With Spinner And Text",
  args: {
    mode: 2,
    active: true,
    spinner: true,
    text: "Loading stuff ...",
  },
};

export const WithCustomSpinner: Story = {
  name: "With Custom Spinner",
  args: {
    mode: 2,
    active: true,
    spinner: fakeSpinner,
    text: "Loading stuff ...",
  },
};

export const StylesProp: Story = {
  name: "Styles Prop",
  args: {
    mode: 2,
    active: true,
    spinner: true,
    styles: {
      wrapper: (base: any, props: any) => ({
        ...base,
        width: 300,
        height: 200,
        overflow: props.active ? "hidden" : "scroll",
      }),
      overlay: (base: any) => ({
        ...base,
        background: "rgba(0, 0, 255, 0.5)",
      }),
      spinner: (base: any) => ({
        ...base,
        width: "100px",
        "& svg circle": {
          stroke: "#FF0000",
        },
      }),
    },
  },
};

export const StyledComponents: Story = {
  name: "Styled Components",
  args: {
    mode: 3,
    active: true,
    spinner: true,
    classNamePrefix: "myOverlay_",
  },
};
