import * as React from 'react';
import classnames from 'classnames';

export interface DataOnChange {
  /**
   * Indicates if checkbox is checked
   */
  checked?: boolean;

  /**
   * Input tag name attribute value
   */
  name?: string;

  /**
   * Input tag value attribute value
   */
  value?: string;

  /**
   * Label for checkbox. Can be React component
   */
  label?: string | React.ReactNode;
}

export interface Props extends DataOnChange {
  /**
   * css classes
   */
  className?: string;

  /**
   * Tab index attribute value
   */
  tabIndex?: number;

  /**
   * Input type
   */
  inputType?: 'radio'|'checkbox';

  /**
   * Indicates if checkbox is toggle
   */
  toggle?: boolean;

  /**
   * Indicates if checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Change handler
   */
  onChange: (data: DataOnChange, event: React.SyntheticEvent) => void;
}

export default class Base extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
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
