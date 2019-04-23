import * as React from 'react';
import classnames from 'classnames';
import './loader.less';

export interface Props {
  /**
   * Indicates if loader is active
   *
   * @default true
   */
  active?: boolean;

  /**
   * Loader text
   *
   * @default ''
   */
  text?: string;

  /**
   * Loader spinner size
   *
   * @default 'small'
   */
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

export default class Loader extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    active: true,
    text: '',
    size: 'small',
  };

  render(): React.ReactNode {
    if (!this.props.active) {
      return null;
    }
    const text = this.props.text !== undefined ? this.props.text : 'Loading';
    const loaderClassName = classnames('ui', {
      text: !!this.props.text,
      [this.props.size]: true,
      loader: true,
    });

    return (
      <div className='ui active inverted dimmer'>
        <div className={loaderClassName}>{text}</div>
      </div>
    );
  }
}
