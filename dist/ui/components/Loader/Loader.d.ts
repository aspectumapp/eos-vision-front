import * as React from 'react';
import './loader.less';
export interface Props {
    /**
     * Indicates if loader is active
     *
     * @default true
     */
    active?: boolean;
    /**
     * Loader text
     *
     * @default ''
     */
    text?: string;
    /**
     * Loader spinner size
     *
     * @default 'small'
     */
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
export default class Loader extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
