import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconSvg from './IconSvg';

const story = storiesOf('UIComponents | Icon / IconSvg', module);

story
  .add('Basic usage', () => {
    return (
      <IconSvg
        name='select-agregation-1'
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Svg icon',
    },
  });

story
  .add('With onClick handler', () => {
    return (
      <IconSvg
        name='select-agregation-2'
        onClick={action('onClick')}
      />
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onClick event',
    },
  });
