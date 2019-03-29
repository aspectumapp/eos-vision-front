import * as React from 'react';

import Base, {
  Props as BaseProps,
} from './Base';

export {
  DataOnChange,
} from './Base';

export interface Props extends BaseProps {
  inputType?: 'radio';
}

export default class Radio extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return (
      <Base
        {...this.props}
        inputType='radio'
      />
    );
  }
}
