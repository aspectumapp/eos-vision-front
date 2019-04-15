import * as React from 'react';

import IconBase, {
  Props,
} from './IconBase';

export {
  Props,
} from './IconBase';

export default class IconSvg extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return (
      <IconBase
        {...this.props}
        name={`svg-icon ${this.props.name}`}
      />
    );
  }
}
