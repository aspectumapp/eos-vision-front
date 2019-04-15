import * as React from 'react';
import classnames from 'classnames';
import './form.less';

export interface Props {
  children: React.ReactNode;
  className?: string;
  label?: string;
  error?: boolean;
  inline?: boolean;
  disabled?: boolean;
  horizontal?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
}

export default class FieldWrap extends React.Component<Props> {
  render(): React.ReactNode {
    const className = classnames(
      'field',
      this.props.className,
      {
        error: this.props.error,
        inline: this.props.inline,
        horizontal: this.props.horizontal,
        disabled: this.props.disabled,
      }
    );

    return (
      <div
        className={className}
        onMouseDown={this.props.onMouseDown}
      >
        {this.props.label && (<label>{this.props.label}</label>)}
        {this.props.children}
      </div>
    );
  }
}
