import React from 'react';

function withSubscription(WrappedComponent, selectData) {
  class WithSubscription extends React.Component {
    render() {
      return <WrappedComponent ></WrappedComponent>;
    }
  }
  WithSubscription.displayName = `WithSubscription(${WrappedComponent.name})`;
  return WithSubscription;
}