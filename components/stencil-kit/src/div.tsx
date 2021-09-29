import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-div',
})
export class Div {

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
