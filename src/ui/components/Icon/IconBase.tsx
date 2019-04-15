import * as React from 'react';

export interface Props {
  children?: React.ReactNode;

  /**
   * Icon name
   */
  name: string;

  /**
   * Icon container
   */
  as?: 'div'|'i'|'button'|'span';

  /**
   * Additional css classes for icon
   */
  className?: string;

  /**
   * Reference to component
   */
  forwardRef?: React.Ref<any>;

  /**
   * Click handler
   */
  onClick?: (event: React.SyntheticEvent) => void;

  /**
   * Mouse down handler
   */
  onMouseDown?: (event: React.SyntheticEvent) => void;
}

export default class IconBase extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    as: 'i',
    className: '',
    onClick: undefined,
    onMouseDown: undefined,
  };

  render(): React.ReactNode {
    const className = [
      this.props.name,
      this.props.className,
    ].filter(name => name)
      .join(' ');

    const Tag = this.props.as;
    return (
      <Tag
        ref={this.props.forwardRef}
        className={className}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
      >{this.props.children}</Tag>
    );
  }
}
