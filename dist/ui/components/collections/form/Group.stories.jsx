import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Group from './Group';
const story = storiesOf('Group', module);
story
    .add('Basic usage', () => {
    return (<Group label='Group label'>
        <label>{'Username'}</label>
        <input type='text'/>
      </Group>);
}, {
    info: {
        inline: true,
    },
});
