import React from "react";
import LoadingOverlay, { LoadingOverlayProps } from "../src";

class DelayedInactive extends React.Component<LoadingOverlayProps> {
  state: any;
  timer: any;

  constructor(props: LoadingOverlayProps) {
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
    const { isActive } = this.state;
    return <LoadingOverlay {...this.props} active={isActive} />;
  }
}

export default DelayedInactive;
