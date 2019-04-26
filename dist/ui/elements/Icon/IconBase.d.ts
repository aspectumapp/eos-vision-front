import * as React from 'react';
export interface Props {
    name: string;
    as?: 'div' | 'i' | 'button' | 'span';
    className?: string;
    forwardRef?: React.Ref<any>;
    children?: React.ReactNode;
    onClick?: (event: React.SyntheticEvent) => void;
    onMouseDown?: (event: React.SyntheticEvent) => void;
}
export default class IconBase extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
