import * as React from 'react';
import './form.less';
export interface Props {
    children: React.ReactNode;
    label?: string;
    error?: boolean;
    disabled?: boolean;
    className?: string;
}
export default class HorizontalField extends React.Component<Props> {
    render(): React.ReactNode;
}
