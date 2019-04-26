import * as React from 'react';
import Base from './Base';
export default class Radio extends React.PureComponent {
    render() {
        return (<Base {...this.props} inputType='radio'/>);
    }
}
