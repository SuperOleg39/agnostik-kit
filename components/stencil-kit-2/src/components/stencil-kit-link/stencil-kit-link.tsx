import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-link',
  shadow: true,
})
export class StencilKitLink {
  // @Event() click: EventEmitter<KeyboardEvent>;

  private handleClick(e) {
    (this as any).click.emit(e);
  }

  render() {
    return (
      <a onClick={this.handleClick}>
        <slot></slot>
      </a>
    );
  }

}
