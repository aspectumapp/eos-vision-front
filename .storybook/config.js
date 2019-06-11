import * as React from 'react';
import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import addonAPI from '@storybook/addons';

import './storybook.css';
import '../src/assets/global.less';

addParameters({
  options: {
    name: 'EOS Vision Front',
    goFullScreen: false,
    showAddonPanel: false,
  }
});

addDecorator(withInfo({
  maxPropsIntoLine: 0,
  styles: {
    header: {
      h1: {
        marginRight: '20px',
        fontSize: '25px',
        display: 'inline',
      },
      body: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      h2: {
        display: 'inline',
        color: '#999',
      },
    },
    infoBody: {
      backgroundColor: '#eee',
      padding: '20px 5px',
      lineHeight: '1.5',
    }
  }
}));

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

let firstLoad = true;
addonAPI.register('eos/my-addon', (storybookAPI) => {
  storybookAPI.onStory((kind, story) => {
    // when you enter a story, if you are just loading storybook up, default to a specific kind/story.
    if (firstLoad) {
      firstLoad = false; // make sure to set this flag to false, otherwise you will never be able to look at another story.
      storybookAPI.selectStory('About | About', 'About library');
    }
  });
});
