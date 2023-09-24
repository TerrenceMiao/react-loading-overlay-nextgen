import React from "react";
import LoadingOverlay from "../src";

interface DelayedInactiveProps {}

interface DelayedInactiveState {
  isActive: boolean;
}

class DelayedInactive extends React.Component<
  DelayedInactiveProps,
  DelayedInactiveState
> {
  timer: any;

  constructor(props: DelayedInactiveProps) {
    super(props);
    this.state = { isActive: true };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ isActive: false }), 600);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <LoadingOverlay {...this.props} active={this.state.isActive} />;
  }
}

export default DelayedInactive;
