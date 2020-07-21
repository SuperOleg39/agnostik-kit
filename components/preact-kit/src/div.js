import { h, Component } from 'preact';
import { forwardRef } from 'preact/compat';

export const Div = forwardRef((props, ref) => {
  return <div ref={ref} {...props} />;
});

// export function Div(props) {
//   return <div {...props} />;
// }
