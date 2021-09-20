import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-button',
})
export class Button {

  @Prop() title: string = '';

  render() {
    return (
      <button>
        {this.title}
      </button>
    );
  }
}
