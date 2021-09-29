import { Component, h, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'stencil-kit-button',
  shadow: true,
})
export class StencilKitButton {
  @Event() onClick: EventEmitter<KeyboardEvent>;

  @State() value = 0;

  private handleClick(e) {
    this.onClick.emit(e);
  }

  increment() {
    this.value += 1;
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        <slot></slot>
        <div onClick={() => this.increment()}>some custom div {this.value}</div>
      </button>
    );
  }

}
