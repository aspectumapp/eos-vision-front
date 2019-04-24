import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';

const style: React.CSSProperties = {
  position: 'relative',
  height: '50px',
};

const story = storiesOf('UIComponents | Loader / Loader', module);
story
  .add('Basic usage', () => {
    return (
      <div
        style={style}
      >
        <Loader />
      </div>
    );
  }, {
    info: {
      inline: true,
      text: `
Display simple loader. By default the loader overloads the entire page. We can limits the loader wrap it into block:
      `,
    },
  })
;

story
  .add('Loader with size', () => {
    return (
      <div
        style={style}
      >
        <Loader
          size='huge'
        />
      </div>
    );
  }, {
    info: {
      inline: true,
      text: `
We can specify size for loader as follow:
      `,
    },
  })
;

story
  .add('Loader with text', () => {
    return (
      <div style={style}>
        <Loader
          text='Loading...'
        />
      </div>
    );
  }, {
    info: {
      inline: true,
      text: `
It is very useful to specify some text with loader spinner:
      `,
    },
  })
;

story
  .add('Override some content', () => {
    return (
      <div style={style}>
        hello one
        <Loader
          text='Loading...'
        />
      </div>
    );
  }, {
    info: {
      inline: true,
      text: `
We can override some content:
      `,
    },
  })
;
