import * as React from 'react';
import IconBase from './IconBase';
export default class IconSvg extends React.PureComponent {
    render() {
        return (<IconBase {...this.props} name={`svg-icon ${this.props.name}`}/>);
    }
}
//# sourceMappingURL=IconSvg.jsx.map