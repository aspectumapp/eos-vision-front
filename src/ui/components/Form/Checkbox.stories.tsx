import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

const story = storiesOf('UIComponents | Form / Checkbox', module);

story
  .add('Basic usage', () => {
    return (
      <Checkbox
        label='Checkbox label'
        checked
        onChange={action('onChange')}
      />
    );
  }, {
    info: {
      inline: true,
    },
  });
