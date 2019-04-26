import * as React from 'react';
import './form.less';
export default class Group extends React.Component {
    render() {
        return (<div className='group'>
        <div className='group-label' title={this.props.label}>{this.props.label}</div>
        {this.props.children}
      </div>);
    }
}
//# sourceMappingURL=Group.jsx.map