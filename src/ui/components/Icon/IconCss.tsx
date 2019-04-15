import * as React from 'react';

import IconBase, {
  Props,
} from './IconBase';

export {
  Props,
} from './IconBase';

export default class IconCss extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return (
      <IconBase
        {...this.props}
        name={`css-icon ${this.props.name}`}
      />
    );
  }
}
