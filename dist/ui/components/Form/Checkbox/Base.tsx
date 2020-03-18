import * as React from 'react';
import classnames from 'classnames';

export interface DataOnChange {
  /**
   * Indicates if checkbox is checked
   *
   * @default false
   */
  checked?: boolean;

  /**
   * Input tag name attribute value
   *
   * @default ''
   */
  name?: string;

  /**
   * Input tag value attribute value
   *
   * @default ''
   */
  value?: string;

  /**
   * Label for checkbox. Can be React component
   *
   * @default ''
   */
  label?: string | React.ReactNode;
}

export interface Props extends DataOnChange {
  /**
   * css classes
   *
   * @default ''
   */
  className?: string;

  /**
   * Tab index attribute value
   *
   * @default 0
   */
  tabIndex?: number;

  /**
   * Input type
   *
   * @default 'checkbox'
   */
  inputType?: 'radio'|'checkbox';

  /**
   * Indicates if checkbox is toggle
   *
   * @default false
   */
  toggle?: boolean;

  /**
   * Indicates if checkbox is disabled
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Indicates if checkbox is autofocused
   *
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Change handler
   *
   * @default undefined
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
    autoFocus: false,
  };

  private input: React.RefObject<HTMLInputElement> = React.createRef();

  componentDidMount(): void {
    if (this.props.autoFocus) {
      this.input.current.focus();
    }
  }

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
          ref={this.input}
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
