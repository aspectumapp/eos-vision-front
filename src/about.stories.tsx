import * as React from 'react';
import { storiesOf } from '@storybook/react';

const story = storiesOf('About | About', module);

story
  .add('About library', () => {
    return (
      <div className='content'>
        <h2>EOS Vision Front Library</h2>
        <div>
          React UI components for SPA from EOS Vision team.
          We are using these components in our project Vision,
          but decided to share with world.
        </div>
      </div>
    );
  }, {
    info: {
      source: false,
      header: false,
      inline: true,
    },
  });
