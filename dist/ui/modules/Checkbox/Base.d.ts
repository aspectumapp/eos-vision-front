import * as React from 'react';
export interface DataOnChange {
    checked?: boolean;
    name?: string;
    value?: string;
    label?: string | React.ReactNode;
}
export interface Props {
    tabIndex?: number;
    inputType?: 'radio' | 'checkbox';
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
    static defaultProps: Partial<Props>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    computeTabIndex: () => number;
    renderLabel(): React.ReactNode;
    render(): React.ReactNode;
}
