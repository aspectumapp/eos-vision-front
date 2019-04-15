import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconSvg from './IconSvg';

const story = storiesOf('Elements | Icon / IconSvg', module);

story
  .add('Basic usage', () => {
    return (
      <IconSvg
        name='some'
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Wrapper for Icon component',
    },
  });

story
  .addParameters({
    options: {
      showAddonPanel: true,
    },
  })
  .add('With onClick handler', () => {
    return (
      <IconSvg
        name='other'
        onClick={action('onClick')}
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onClick event',
    },
  });
