import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconCss from './IconCss';

const story = storiesOf('Elements | Icon / IconCss', module);

story
  .add('Basic usage', () => {
    return (
      <IconCss
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
      <IconCss
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
