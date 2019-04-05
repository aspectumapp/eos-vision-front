import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

const stories = storiesOf('Checkbox', module);

stories.add(
  'Checkbox',
  () => {
    return (
      <Checkbox
        label='Click me'
        onChange={action('on-change')}
      >
        {'Click me'}
      </Checkbox>
    );
  },
  { info: { inline: true } }
);
