import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-link',
})
export class Link {

  @Prop() href: string = '';

  @Prop() title: string = '';

  render() {
    return (
      <a href={this.href}>
        {this.title}
      </a>
    );
  }
}
