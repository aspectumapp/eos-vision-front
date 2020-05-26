import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    /**
     * Sets custom css classes
     *
     * @default ''
     */
    className?: string;
    /**
     * Sets label for field. This label also usage as title
     *
     * @default ''
     */
    label?: string;
    /**
     * Indicates if field has error. For example validation error
     *
     * @default false
     */
    error?: boolean;
    /**
     * Indicates if field is inline
     *
     * @default false
     */
    inline?: boolean;
    /**
     * Indicates if field is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicates if field is horizontal
     *
     * @default false
     */
    horizontal?: boolean;
    /**
     * onMouseDown handler
     *
     * @default undefined
     */
    onMouseDown?: (event: React.MouseEvent) => void;
}
export default class FieldWrap extends React.Component<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
