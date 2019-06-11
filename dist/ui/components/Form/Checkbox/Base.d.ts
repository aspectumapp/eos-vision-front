import * as React from 'react';
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
    inputType?: 'radio' | 'checkbox';
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
     * Change handler
     *
     * @default undefined
     */
    onChange: (data: DataOnChange, event: React.SyntheticEvent) => void;
}
export default class Base extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    computeTabIndex: () => number;
    renderLabel(): React.ReactNode;
    render(): React.ReactNode;
}
