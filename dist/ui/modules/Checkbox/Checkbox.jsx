import * as React from 'react';
import Base from './Base';
export default class Checkbox extends React.PureComponent {
    render() {
        return (<Base {...this.props} inputType='checkbox'/>);
    }
}
