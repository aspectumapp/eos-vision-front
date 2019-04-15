import * as React from 'react';
import classnames from 'classnames';

export interface Props {
  children: React.ReactNode;
  label?: string;
  error?: boolean;
  disabled?: boolean;
}

export default class HorizontalField extends React.Component<Props> {
  render(): React.ReactNode {
    const className = classnames('field horizontal', {
      error: this.props.error,
      disabled: this.props.disabled,
    });

    return (
      <div className={className}>
        {this.props.label && (<label>{this.props.label}</label>)}
        {this.props.children}
      </div>
    );
  }
}
