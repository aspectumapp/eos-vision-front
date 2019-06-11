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
        name='layer-type place'
      >
        <Icon name='place' />
      </IconCss>
    );
  }, {
    info: {
      inline: true,
      text: 'Wrapper for Icon component',
    },
  });

story
  .add('With onClick handler', () => {
    return (
      <IconCss
        name='layer-type polygon'
        onClick={action('onClick')}
      >
        <Icon name='aoi_polygon' />
      </IconCss>
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onClick event',
    },
  });
