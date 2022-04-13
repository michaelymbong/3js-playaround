import React, { ErrorInfo, ReactNode } from "react";

export type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: ReactNode | ReactNode[];
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: object) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Oops, something went wrong. Try refreshing the page.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
