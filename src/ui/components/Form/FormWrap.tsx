import * as React from 'react';
import classnames from 'classnames';
import './form.less';

export interface Props {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  mini?: boolean;
  error?: boolean;
  hide?: boolean;
}

export default class FormWrap extends React.Component<Props> {
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
