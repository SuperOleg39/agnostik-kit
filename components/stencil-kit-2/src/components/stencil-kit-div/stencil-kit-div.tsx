import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-kit-div',
  shadow: true,
})
export class StencilKitDiv {
  @Element() host: HTMLDivElement;

  @Prop() children: Array<any> = [];

  componentDidUpdate() {
    // let slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement;
    // this.children = slotted.assignedNodes().filter((node) => { return node.nodeName !== '#text'; });
    console.log('children', this.children);
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }

}
