import * as React from 'react';
import './checkbox1.less';
import { Props as BaseProps } from './Checkbox/Base';
export { DataOnChange, } from './Checkbox/Base';
export interface Props extends BaseProps {
    inputType?: 'checkbox';
}
export default class Checkbox extends React.PureComponent<Props> {
    render(): React.ReactNode;
}
