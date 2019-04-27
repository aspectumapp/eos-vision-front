import * as React from 'react';
import './checkbox.less';
import Base from './Checkbox/Base';
export default class Radio extends React.PureComponent {
    render() {
        return (<Base {...this.props} inputType='radio'/>);
    }
}
//# sourceMappingURL=Radio.jsx.map