import React, { Component } from 'react';
import style from './ErrorBoundary.module.css';

class ErrorBoundary extends Component<
  { children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? (
      <div id={style.error}>
        <p className={style.text}>
          Something went wrong... Please refresh the window. And here is a cute
          picture of Togepi for you
        </p>
        <img
          className={style.img}
          src="https://i.pinimg.com/originals/6b/e2/46/6be246121be8548270ca52a4dd8d5549.png"
          alt=""
        />
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
