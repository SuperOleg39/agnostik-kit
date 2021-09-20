import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { h, render } from 'preact';
import renderToString from 'preact-render-to-string';

export function createPreactAdapter(Component, tag = 'span', style = {}) {
  return function PreactAdapter(props) {
    if (window.SERVER) {
      const childrenFromServer = typeof props.children === 'function'
        ? ReactDOMServer.renderToString(props.children())
        : ReactDOMServer.renderToString(props.children);

      const c = h(Component, { ...props, children: null, dangerouslySetInnerHTML: { __html: childrenFromServer } });

      return React.createElement(tag, { style, dangerouslySetInnerHTML: { __html: renderToString(c) } });
    }

    const rootRef = useRef(null);
    const componentRef = useRef(null);

    useEffect(() => {
      if (rootRef.current) {
        const c = h(Component, { ...props, ref: componentRef, children: null });

        render(c, rootRef.current);

        if (props.children && componentRef.current instanceof HTMLElement) {
          ReactDOM.hydrate(
            typeof props.children === 'function'
              ? props.children()
              : props.children, componentRef.current
          );
        }
      }
      // @todo destroy
    }, [...Object.keys(props), ...Object.values(props)]);

    return React.createElement(tag, { ref: rootRef, style });
  }
}
