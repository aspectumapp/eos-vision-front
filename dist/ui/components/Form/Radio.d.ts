import * as React from 'react';
import './checkbox.less';
import { Props as BaseProps } from './Checkbox/Base';
export { DataOnChange, } from './Checkbox/Base';
export interface Props extends BaseProps {
    inputType?: 'radio';
}
export default class Radio extends React.PureComponent<Props> {
    render(): React.ReactNode;
}
