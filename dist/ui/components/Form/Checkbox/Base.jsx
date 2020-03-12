import * as React from 'react';
import classnames from 'classnames';
export default class Base extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.input = React.createRef();
        this.handleChange = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.onChange({
                checked: !this.props.checked,
                name: this.props.name,
                value: this.props.value,
                label: this.props.label,
            }, event);
        };
        this.handleClick = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.onChange({
                checked: !this.props.checked,
                name: this.props.name,
                value: this.props.value,
                label: this.props.label,
            }, event);
        };
        this.computeTabIndex = () => {
            const { disabled, tabIndex, } = this.props;
            return disabled ? -1 : tabIndex;
        };
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            this.input.current.focus();
        }
    }
    renderLabel() {
        const { label, } = this.props;
        if (!label || typeof label === 'string') {
            return (<label title={label}>{label}</label>);
        }
        return (<label>{this.props.label}</label>);
    }
    render() {
        const className = classnames('ui checkbox', this.props.className, {
            checked: this.props.checked,
            toggle: this.props.toggle,
            radio: this.props.inputType === 'radio',
            fitted: !this.props.label,
        });
        return (<div className={className} onClick={this.handleClick}>
        <input ref={this.input} type={this.props.inputType} name={this.props.name} checked={this.props.checked} tabIndex={this.computeTabIndex()} className='hidden' disabled={this.props.disabled} onChange={this.handleChange}/>
        {this.renderLabel()}
      </div>);
    }
}
Base.defaultProps = {
    className: '',
    tabIndex: 0,
    disabled: false,
    onChange: undefined,
    toggle: false,
    inputType: 'checkbox',
    checked: false,
    name: '',
    value: '',
    label: '',
    autoFocus: false,
};
//# sourceMappingURL=Base.jsx.map