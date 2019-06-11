import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

const story = storiesOf('UIComponents | Form / Radio', module);

story
  .add('Basic usage', () => {
    return (
      <Radio
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
