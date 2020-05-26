import cx from 'classnames';
import invoke from 'lodash-es/invoke';
import get from 'lodash-es/get';
import isNil from 'lodash-es/isNil';
import includes from 'lodash-es/includes';
import * as React from 'react';
function normalizeTransitionDuration(duration, type) {
    return (typeof duration === 'number' || typeof duration === 'string') ? duration : duration[type];
}
function useKeyOnly(val, key) {
    return val && key;
}
const DIRECTIONAL_TRANSITIONS = [
    'browse',
    'browse right',
    'drop',
    'fade',
    'fade up',
    'fade down',
    'fade left',
    'fade right',
    'fly up',
    'fly down',
    'fly left',
    'fly right',
    'horizontal flip',
    'vertical flip',
    'scale',
    'slide up',
    'slide down',
    'slide left',
    'slide right',
    'swing up',
    'swing down',
    'swing left',
    'swing right',
    'zoom',
];
var TransitionStatus;
(function (TransitionStatus) {
    TransitionStatus["Entered"] = "ENTERED";
    TransitionStatus["Entering"] = "ENTERING";
    TransitionStatus["Exited"] = "EXITED";
    TransitionStatus["Exiting"] = "EXITING";
    TransitionStatus["Unmounted"] = "UNMOUNTED";
})(TransitionStatus || (TransitionStatus = {}));
const TRANSITION_TYPE = {
    [TransitionStatus.Entering]: 'show',
    [TransitionStatus.Exiting]: 'hide',
};
/**
 * A transition is an animation usually used to move content in or out of view.
 */
export default class Transition extends React.Component {
    constructor(props) {
        super(props);
        // ----------------------------------------
        // Callback handling
        // ----------------------------------------
        this.handleStart = () => {
            const { duration } = this.props;
            const status = this.nextStatus;
            this.nextStatus = null;
            this.setState({ status, animating: true }, () => {
                const durationType = TRANSITION_TYPE[status];
                const durationValue = normalizeTransitionDuration(duration, durationType);
                invoke(this.props, 'onStart', null, Object.assign(Object.assign({}, this.props), { status }));
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                    this.timeoutId = null;
                }
                this.timeoutId = setTimeout(this.handleComplete, durationValue);
            });
        };
        this.handleComplete = () => {
            this.timeoutId = null;
            const { status: current } = this.state;
            invoke(this.props, 'onComplete', null, Object.assign(Object.assign({}, this.props), { status: current }));
            if (this.nextStatus) {
                this.handleStart();
                return;
            }
            const status = this.computeCompletedStatus();
            const callback = current === TransitionStatus.Entering ? 'onShow' : 'onHide';
            this.setState({ status, animating: false }, () => {
                invoke(this.props, callback, null, Object.assign(Object.assign({}, this.props), { status }));
            });
        };
        this.updateStatus = () => {
            const { animating } = this.state;
            if (this.nextStatus) {
                this.nextStatus = this.computeNextStatus();
                if (!animating) {
                    this.handleStart();
                }
            }
        };
        // ----------------------------------------
        // Helpers
        // ----------------------------------------
        this.computeClasses = () => {
            const { animation, directional, children } = this.props;
            const { animating, status } = this.state;
            const childClasses = get(children, 'props.className');
            const isDirectional = isNil(directional)
                ? includes(DIRECTIONAL_TRANSITIONS, animation)
                : directional;
            if (isDirectional) {
                return cx(animation, childClasses, useKeyOnly(animating, 'animating'), useKeyOnly(status === TransitionStatus.Entering, 'in'), useKeyOnly(status === TransitionStatus.Exiting, 'out'), useKeyOnly(status === TransitionStatus.Exited, 'hidden'), useKeyOnly(status !== TransitionStatus.Exited, 'visible'), 'transition');
            }
            return cx(animation, childClasses, useKeyOnly(animating, 'animating transition'));
        };
        this.computeCompletedStatus = () => {
            const { unmountOnHide } = this.props;
            const { status } = this.state;
            if (status === TransitionStatus.Entering) {
                return TransitionStatus.Entered;
            }
            return unmountOnHide ? TransitionStatus.Unmounted : TransitionStatus.Exited;
        };
        this.computeInitialStatuses = () => {
            const { visible, mountOnShow, transitionOnMount, unmountOnHide, } = this.props;
            if (visible) {
                if (transitionOnMount) {
                    return {
                        initial: TransitionStatus.Exited,
                        next: TransitionStatus.Entering,
                    };
                }
                return { initial: TransitionStatus.Entered };
            }
            if (mountOnShow || unmountOnHide) {
                return { initial: TransitionStatus.Unmounted };
            }
            return { initial: TransitionStatus.Exited };
        };
        this.computeNextStatus = () => {
            const { animating, status } = this.state;
            const { visible } = this.props;
            if (!visible) {
                if (status !== TransitionStatus.Exited
                    && status !== TransitionStatus.Unmounted
                    && status !== TransitionStatus.Exiting) {
                    return TransitionStatus.Exiting;
                }
                else {
                    return this.props.unmountOnHide
                        ? TransitionStatus.Unmounted
                        : TransitionStatus.Exited;
                }
            }
            if (animating) {
                return status === TransitionStatus.Entering
                    ? TransitionStatus.Exiting
                    : TransitionStatus.Entering;
            }
            return status === TransitionStatus.Entered
                ? TransitionStatus.Exiting
                : TransitionStatus.Entering;
        };
        this.computeStatuses = (props) => {
            const { status } = this.state;
            const { visible } = props;
            if (visible) {
                return {
                    current: status === TransitionStatus.Unmounted && TransitionStatus.Exited,
                    next: status !== TransitionStatus.Entering && status !== TransitionStatus.Entered && TransitionStatus.Entering,
                };
            }
            return {
                next: (status === TransitionStatus.Entering || status === TransitionStatus.Entered) && TransitionStatus.Exiting,
            };
        };
        this.computeStyle = () => {
            const { children, duration } = this.props;
            const { status } = this.state;
            const childStyle = get(children, 'props.style');
            const type = TRANSITION_TYPE[status];
            const animationDuration = type && `${normalizeTransitionDuration(duration, type)}ms`;
            return Object.assign(Object.assign({}, childStyle), { animationDuration });
        };
        const { initial: status, next } = this.computeInitialStatuses();
        this.nextStatus = next;
        this.state = { status };
    }
    // ----------------------------------------
    // Lifecycle
    // ----------------------------------------
    componentDidMount() {
        this.updateStatus();
    }
    componentWillReceiveProps(nextProps) {
        const { current: status, next } = this.computeStatuses(nextProps);
        this.nextStatus = next;
        if (status) {
            this.setState({ status });
        }
    }
    componentDidUpdate() {
        this.updateStatus();
    }
    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    // ----------------------------------------
    // Render
    // ----------------------------------------
    render() {
        const { status } = this.state;
        if (status === TransitionStatus.Unmounted) {
            return null;
        }
        return React.cloneElement(this.props.children, {
            className: this.computeClasses(),
            style: this.computeStyle(),
        });
    }
}
Transition.defaultProps = {
    animation: 'fade',
    duration: 500,
    visible: true,
    mountOnShow: true,
    transitionOnMount: false,
    unmountOnHide: false,
};
//# sourceMappingURL=Transition.jsx.map