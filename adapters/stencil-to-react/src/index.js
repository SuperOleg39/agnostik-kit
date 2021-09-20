import React, { useEffect, useLayoutEffect } from 'react';

export function createStencilAdapter(WebComponent, tag = 'span', style = {}) {
  return function StencilAdapter(props) {
    const tagRef = React.useRef();

    const useIsomorphicLayoutEffect = window.SERVER ? useEffect : useLayoutEffect;

    useIsomorphicLayoutEffect(() => {
      const webComponent = tagRef.current.children[0];
      console.dir(webComponent);
      const unsubscribe = [];

      Object.keys(props).forEach((key) => {
        if (key === 'children') {
          console.error('что делать?', props[key]);
          webComponent[key] = props[key];
        } else if (typeof props[key] === 'function') {
          const handler = (customEvent) => {
            console.error('handler');
            props[key](customEvent.detail);
          };

          console.error('addEventListener', key);
          webComponent.addEventListener(key, handler);

          unsubscribe.push(() => webComponent.removeEventListener(key, handler));
        } else if (typeof props[key] === 'object') {
          webComponent[key] = JSON.stringify(props[key]);
        } else {
          webComponent[key] = props[key];
        }
      });

      return () => {
        unsubscribe.forEach((cb) => cb());
      }
    }, [...props]);

    if (window.SERVER) {
      const webComponentProps = {};

      Object.keys(props).forEach((key) => {
        if (key === 'children') {
          webComponentProps[key] = props[key];
        } else if (typeof props[key] === 'function') {
          // do nothing
        } else if (typeof props[key] === 'object') {
          webComponentProps[key] = JSON.stringify(props[key]);
        } else {
          webComponentProps[key] = props[key];
        }
      });

      return React.createElement(tag, { style }, React.createElement(WebComponent, webComponentProps));
    } else {
      return React.createElement(tag, { ref: tagRef, style, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: ' ' } });
    }
  }
}
