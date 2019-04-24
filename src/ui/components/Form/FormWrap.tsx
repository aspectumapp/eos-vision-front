import * as React from 'react';
import classnames from 'classnames';
import './form.less';

export interface Props {
  children: React.ReactNode;

  /**
   * Sets css classes for component
   *
   * @default ''
   */
  className?: string;

  /**
   * Indicates if form has loading status
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Indicates if form has mini size
   *
   * @default false
   */
  mini?: boolean;

  /**
   * Indicates if form has .error css class
   *
   * @default false
   */
  error?: boolean;

  /**
   * Indicates if form has .hide css class
   *
   * @default false
   */
  hide?: boolean;
}

export default class FormWrap extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    className: '',
    loading: false,
    mini: false,
    error: false,
    hide: false,
  };

  render(): React.ReactNode {
    const className = classnames(
      'ui form',
      this.props.className,
      {
        mini: this.props.mini,
        error: this.props.error,
        hide: this.props.hide,
        loading: this.props.loading,
      }
    );

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
