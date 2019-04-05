import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addParameters({
  options: {
    name: 'EOS Vision Front',
    goFullScreen: false,
    showAddonPanel: false,
  }
});

addDecorator(withInfo);

const req = require.context('../src/ui', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
