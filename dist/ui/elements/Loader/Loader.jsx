import * as React from 'react';
export default class Loader extends React.PureComponent {
    render() {
        if (!this.props.active) {
            return null;
        }
        const text = this.props.text !== undefined ? this.props.text : 'Loading';
        return (<div className='ui active inverted dimmer'>
        <div className='ui text loader'>{text}</div>
      </div>);
    }
}
Loader.defaultProps = {
    active: true,
};
