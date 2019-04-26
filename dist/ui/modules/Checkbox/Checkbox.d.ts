import * as React from 'react';
import { Props as BaseProps } from './Base';
export { DataOnChange, } from './Base';
export interface Props extends BaseProps {
    inputType?: 'checkbox';
}
export default class Checkbox extends React.PureComponent<Props> {
    render(): React.ReactNode;
}
