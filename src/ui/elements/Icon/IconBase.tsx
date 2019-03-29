import * as React from 'react';

export interface Props {
  name: string;
  as?: 'div'|'i'|'button'|'span';
  className?: string;
  forwardRef?: React.Ref<any>;
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
  onMouseDown?: (event: React.SyntheticEvent) => void;
}

export default class IconBase extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    as: 'i',
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
