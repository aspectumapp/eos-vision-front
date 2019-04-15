import * as React from 'react';
import classnames from 'classnames';

export interface DataOnChange {
  checked?: boolean;
  name?: string;
  value?: string;
  label?: string | React.ReactNode;
}

export interface Props {
  tabIndex?: number;
  inputType?: 'radio'|'checkbox';
  checked?: boolean;
  name?: string;
  value?: string;
  label?: string | React.ReactNode;
  toggle?: boolean;
  className?: string;
  onChange: (data: DataOnChange, event: React.SyntheticEvent) => void;
  disabled?: boolean;
}

export default class Base extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    className: '',
    tabIndex: 0,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

  handleClick = (event: React.MouseEvent): void => {
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

  computeTabIndex = (): number => {
    const {
      disabled,
      tabIndex,
    } = this.props;

    return disabled ? -1 : tabIndex;
  };

  renderLabel(): React.ReactNode {
    const {
      label,
    } = this.props;

    if (!label || typeof label === 'string') {
      return (
        <label
          title={label as string}
        >{label}</label>
      );
    }

    return (
      <label>{this.props.label}</label>
    );
  }

  render(): React.ReactNode {
    const className = classnames(
      'ui checkbox',
      this.props.className,
      {
        checked: this.props.checked,
        toggle: this.props.toggle,
        radio: this.props.inputType === 'radio',
        fitted: !this.props.label,
      }
    );

    return (
      <div
        className={className}
        onClick={this.handleClick}
      >
        <input
          type={this.props.inputType}
          name={this.props.name}
          checked={this.props.checked}
          tabIndex={this.computeTabIndex()}
          className='hidden'
          disabled={this.props.disabled}
          onChange={this.handleChange}
        />
        {this.renderLabel()}
      </div>
    );
  }
}
