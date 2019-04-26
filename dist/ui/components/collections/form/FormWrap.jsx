import * as React from 'react';
import classnames from 'classnames';
export default class FormWrap extends React.Component {
    render() {
        const className = classnames('ui form', this.props.className, {
            mini: this.props.mini,
            error: this.props.error,
            hide: this.props.hide,
            loading: this.props.loading,
        });
        return (<div className={className}>
        {this.props.children}
      </div>);
    }
}
