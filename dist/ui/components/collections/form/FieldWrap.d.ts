import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    label?: string;
    error?: boolean;
    inline?: boolean;
    disabled?: boolean;
    horizontal?: boolean;
    onMouseDown?: (event: React.MouseEvent) => void;
}
export default class FieldWrap extends React.Component<Props> {
    render(): React.ReactNode;
}
