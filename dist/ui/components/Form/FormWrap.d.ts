import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    /**
     * Sets css classes for component
     *
     * @default ''
     */
    className?: string;
    /**
     * Indicates if form has loading status
     *
     * @default false
     */
    loading?: boolean;
    /**
     * Indicates if form has mini size
     *
     * @default false
     */
    mini?: boolean;
    /**
     * Indicates if form has .error css class
     *
     * @default false
     */
    error?: boolean;
    /**
     * Indicates if form has .hide css class
     *
     * @default false
     */
    hide?: boolean;
}
export default class FormWrap extends React.Component<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
