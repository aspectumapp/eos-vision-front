import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';

const story = storiesOf('UIComponents | Loader / Loader', module);

story
  .add('Basic usage', () => {
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <Loader />
      </div>
    );
  }, {
    info: {
      inline: true,
      text: 'Display simple loader',
    },
  });

story
  .add('Loader with text', () => {
    return (
      <Loader
        text='Loading...'
      />
    );
  }, {
    info: {
      inline: true,
    },
  });
