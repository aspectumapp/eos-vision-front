import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FieldWrap from './FieldWrap';

const story = storiesOf('Components | Collections / Form / FieldWrap', module);

story
  .add('Basic usage', () => {
    return (
      <FieldWrap>
        <input
          type='text'
        />
      </FieldWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Wrap form field into additional `div` block',
    },
  });

story
  .add('With label', () => {
    return (
      <FieldWrap
        label='Username'
      >
        <input
          type='text'
        />
      </FieldWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Wrap form field with label',
    },
  });

story
  .add('With errors', () => {
    return (
      <FieldWrap
        label='Username'
        error
      >
        <input
          type='text'
        />
      </FieldWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Wrap form field with label and error',
    },
  });

story
  .addParameters({
    options: {
      showAddonPanel: true,
    },
  })
  .add('With onMouseDown handler', () => {
    return (
      <FieldWrap
        onMouseDown={action('onMouseDown')}
      >
        <input
          type='text'
        />
      </FieldWrap>
    );
  }, {
    info: {
      inline: true,
      text: 'Handle onMouseDown event',
    },
  });
