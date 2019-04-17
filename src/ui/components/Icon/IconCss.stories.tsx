import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconCss from './IconCss';
import Icon from './Icon';

const story = storiesOf('UIComponents | Icon / IconCss', module);

story
  .add('Basic usage', () => {
    return (
      <IconCss
        name='some'
      >
        <Icon name='open_new' />
      </IconCss>
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
      >
        <Icon name='open_new' />
      </IconCss>
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onClick event',
    },
  });
