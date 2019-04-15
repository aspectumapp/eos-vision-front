import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';

const story = storiesOf('Elements | Loader / Loader', module);

story
  .add('Basic usage', () => {
    return (
      <Loader />
    );
  }, {
    info: {
      inline: true,
      text: 'Display simple loader',
    },
  });

story
  .addParameters({
    options: {
      showAddonPanel: true,
    },
  })
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
