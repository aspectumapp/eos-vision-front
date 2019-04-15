import * as React from 'react';
import './icon.less';

import IconBase, {
  Props,
} from './IconBase';

export {
  Props,
} from './IconBase';

export default class Icon extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return (
      <IconBase
        {...this.props}
        name={`icon eos_ic_${this.props.name}`}
      />
    );
  }
}
