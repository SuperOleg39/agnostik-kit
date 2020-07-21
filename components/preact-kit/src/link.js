import { h, Component } from 'preact';
import { forwardRef } from 'preact/compat';

export const Link = forwardRef((props, ref) => {
  return <a ref={ref} {...props} />;
});

// export function Link(props) {
//   return <a {...props} />;
// }
