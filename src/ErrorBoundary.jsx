import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>App crashed</h1>
          <p>Something went wrong.</p>
          {this.state.error}
        </div>
      );
    }

    return this.props.children;
  }
}
