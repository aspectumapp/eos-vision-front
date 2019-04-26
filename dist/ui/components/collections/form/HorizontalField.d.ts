import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    label?: string;
    error?: boolean;
    disabled?: boolean;
}
export default class HorizontalField extends React.Component<Props> {
    render(): React.ReactNode;
}
