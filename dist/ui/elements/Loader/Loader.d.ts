import * as React from 'react';
export interface Props {
    active?: boolean;
    text?: string;
}
export default class Loader extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    render(): React.ReactNode;
}
