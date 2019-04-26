import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    loading?: boolean;
    mini?: boolean;
    error?: boolean;
    hide?: boolean;
}
export default class FormWrap extends React.Component<Props> {
    render(): React.ReactNode;
}
