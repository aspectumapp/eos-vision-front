import * as React from 'react';
export default class IconBase extends React.PureComponent {
    render() {
        const className = [
            this.props.name,
            this.props.className,
        ].filter(name => name)
            .join(' ');
        const Tag = this.props.as;
        return (<Tag ref={this.props.forwardRef} className={className} onClick={this.props.onClick} onMouseDown={this.props.onMouseDown}>{this.props.children}</Tag>);
    }
}
IconBase.defaultProps = {
    as: 'i',
};
