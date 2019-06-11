import * as React from 'react';
import './icon.less';
import IconBase from './IconBase';
export default class Icon extends React.PureComponent {
    render() {
        return (<IconBase {...this.props} name={`icon eos_ic_${this.props.name}`}/>);
    }
}
//# sourceMappingURL=Icon.jsx.map