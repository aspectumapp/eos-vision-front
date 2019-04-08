import * as React from 'react';

export interface Props {
  /**
   * Indicates if loader is active
   */
  active?: boolean;

  /**
   * Loader text
   */
  text?: string;
}

export default class Loader extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    active: true,
    text: '',
  };

  render(): React.ReactNode {
    if (!this.props.active) {
      return null;
    }
    const text = this.props.text !== undefined ? this.props.text : 'Loading';

    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>{text}</div>
      </div>
    );
  }
}
