import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from './Icon';

const story = storiesOf('Elements | Icon / Icon', module);

story
  .add('Basic usage', () => {
    return (
      <Icon
        name='some'
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Display simple icon',
    },
  });

story
  .addParameters({
    options: {
      showAddonPanel: true,
    },
  })
  .add('Icon as button', () => {
    return (
      <Icon
        name='other'
        as='button'
        onClick={action('onClick')}
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onClick event',
    },
  });
