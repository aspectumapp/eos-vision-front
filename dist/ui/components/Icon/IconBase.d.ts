import * as React from 'react';
export interface Props {
    children?: React.ReactNode;
    /**
     * Icon name
     */
    name: string;
    /**
     * Icon container
     *
     * @default 'i'
     */
    as?: 'div' | 'i' | 'button' | 'span';
    /**
     * Additional css classes for icon
     */
    className?: string;
    /**
     * Reference to component
     */
    forwardRef?: React.Ref<any>;
    /**
     * Click handler
     */
    onClick?: (event: React.SyntheticEvent) => void;
    /**
     * Mouse down handler
     */
    onMouseDown?: (event: React.SyntheticEvent) => void;
}
export default class IconBase extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
