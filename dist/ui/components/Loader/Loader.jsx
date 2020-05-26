import * as React from 'react';
import classnames from 'classnames';
export default class Loader extends React.PureComponent {
    render() {
        if (!this.props.active) {
            return null;
        }
        const text = this.props.text !== undefined ? this.props.text : 'Loading';
        const loaderClassName = classnames('ui', {
            text: !!this.props.text,
            [this.props.size]: true,
            loader: true,
        });
        return (<div className='ui active inverted dimmer'>
        <div className={loaderClassName}>{text}</div>
      </div>);
    }
}
Loader.defaultProps = {
    active: true,
    text: '',
    size: '',
};
//# sourceMappingURL=Loader.jsx.map