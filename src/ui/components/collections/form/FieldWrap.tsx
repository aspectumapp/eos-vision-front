import * as React from 'react';
import classnames from 'classnames';

export interface Props {
  children: React.ReactNode;

  /**
   * Sets custom css classes
   */
  className?: string;

  /**
   * Sets label for field. This label also usage as title
   */
  label?: string;

  /**
   * Indicates if field has error. For example validation error
   */
  error?: boolean;

  /**
   * Indicates if field is inline
   */
  inline?: boolean;

  /**
   * Indicates if field is disabled
   */
  disabled?: boolean;

  /**
   * Indicates if field is horizontal
   */
  horizontal?: boolean;

  /**
   * onMouseDown handler
   */
  onMouseDown?: (event: React.MouseEvent) => void;
}

export default class FieldWrap extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    className: '',
    label: '',
    error: false,
    inline: false,
    disabled: false,
    horizontal: false,
    onMouseDown: undefined,
  };

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
