import React from "react";

const asuncComponent = importComponent => {
  return class extends React.Component {
    state = {
      copmonent: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.copmonent;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asuncComponent;
