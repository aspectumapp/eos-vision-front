import * as React from 'react';

export interface Props {
  children: React.ReactNode;
  label: string;
}

export default class Group extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className='group'>
        <div
          className='group-label'
          title={this.props.label}
        >{this.props.label}</div>
        {this.props.children}
      </div>
    );
  }
}
