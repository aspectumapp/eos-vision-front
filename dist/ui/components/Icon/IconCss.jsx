import * as React from 'react';
import './IconCss.less';
import IconBase from './IconBase';
export default class IconCss extends React.PureComponent {
    render() {
        return (<IconBase {...this.props} name={`css-icon ${this.props.name}`}/>);
    }
}
//# sourceMappingURL=IconCss.jsx.map