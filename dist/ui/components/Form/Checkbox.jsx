import * as React from 'react';
import './checkbox.less';
import Base from './Checkbox/Base';
export default class Checkbox extends React.PureComponent {
    render() {
        return (<Base {...this.props} inputType='checkbox'/>);
    }
}
//# sourceMappingURL=Checkbox.jsx.map