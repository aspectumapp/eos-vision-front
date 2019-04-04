import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Group from '../src/ui/components/collections/form/Group';

const stories = storiesOf('Group', module);

stories.add(
  'Group',
  () => <Group label='hello'>{'hello'}</Group>,
  { info: { inline: true } }
);
