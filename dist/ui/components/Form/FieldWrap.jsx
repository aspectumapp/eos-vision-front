import * as React from 'react';
import classnames from 'classnames';
import './form.less';
export default class FieldWrap extends React.Component {
    render() {
        const className = classnames('field', this.props.className, {
            error: this.props.error,
            inline: this.props.inline,
            horizontal: this.props.horizontal,
            disabled: this.props.disabled,
        });
        return (<div className={className} onMouseDown={this.props.onMouseDown}>
        {this.props.label && (<label>{this.props.label}</label>)}
        {this.props.children}
      </div>);
    }
}
FieldWrap.defaultProps = {
    className: '',
    label: '',
    error: false,
    inline: false,
    disabled: false,
    horizontal: false,
    onMouseDown: undefined,
};
//# sourceMappingURL=FieldWrap.jsx.map