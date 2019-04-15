import * as React from 'react';
import { storiesOf } from '@storybook/react';

import FormWrap from './FormWrap';

const story = storiesOf('Components | Collections / Form / FormWrap', module);

story
  .add('Basic usage', () => {
    return (
      <FormWrap>
        <input
          type='text'
        />
      </FormWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Simple form with fields',
    },
  });

story
  .add('With loading', () => {
    return (
      <FormWrap
        loading
      >
        <input
          type='text'
        />
      </FormWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Loading form',
    },
  });
