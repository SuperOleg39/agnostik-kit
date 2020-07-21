import { h, Component } from 'preact';
import { forwardRef } from 'preact/compat';

export const Button = forwardRef((props, ref) => {
  return <button ref={ref} {...props} />;
});

// export function Button(props) {
//   return <button {...props} />;
// }
