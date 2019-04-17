import * as React from 'react';
import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import './storybook.css';

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

const req = require.context('../src/ui', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
