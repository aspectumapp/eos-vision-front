import cx from 'classnames';
import invoke from 'lodash-es/invoke';
import get from 'lodash-es/get';
import isNil from 'lodash-es/isNil';
import includes from 'lodash-es/includes';
import * as React from 'react';

function normalizeTransitionDuration(duration, type): number {
  return (typeof duration === 'number' || typeof duration === 'string') ? duration : duration[type];
}
function useKeyOnly(val: boolean, key: string): string {
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
enum TransitionStatus {
  Entered = 'ENTERED',
  Entering = 'ENTERING',
  Exited = 'EXITED',
  Exiting = 'EXITING',
  Unmounted = 'UNMOUNTED',
}
const TRANSITION_TYPE = {
  [TransitionStatus.Entering]: 'show',
  [TransitionStatus.Exiting]: 'hide',
};

interface TransitionEventData extends Props {
  [key: string]: any;
  status: TransitionStatus;
}

export interface Props {
  /** Named animation event to used. Must be defined in CSS. */
  animation?: string;

  /** Primary content. */
  children: React.ReactElement<any>;

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional?: boolean;

  /** Duration of the CSS transition animation in milliseconds. */
  duration?: number | string | any;

  /** Show the component; triggers the enter or exit animation. */
  visible?: boolean;

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow?: boolean;

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete?: (nothing: null, data: TransitionEventData) => void;

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide?: (nothing: null, data: TransitionEventData) => void;

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow?: (nothing: null, data: TransitionEventData) => void;

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart?: (nothing: null, data: TransitionEventData) => void;

  /** React's key of the element. */
  reactKey?: string;

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount?: boolean;

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide?: boolean;
}

interface CompState {
  status: TransitionStatus;
  animating?: boolean;
}

/**
 * A transition is an animation usually used to move content in or out of view.
 */
export default class Transition extends React.Component<Props, CompState> {
  static defaultProps: Partial<Props> = {
    animation: 'fade',
    duration: 500,
    visible: true,
    mountOnShow: true,
    transitionOnMount: false,
    unmountOnHide: false,
  };

  protected timeoutId: any;
  protected nextStatus: TransitionStatus;

  constructor(props: Props) {
    super(props);

    const { initial: status, next } = this.computeInitialStatuses();
    this.nextStatus = next;
    this.state = { status };
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  componentDidMount(): void {
    this.updateStatus();
  }

  componentWillReceiveProps(nextProps: Props): void {
    const { current: status, next } = this.computeStatuses(nextProps);

    this.nextStatus = next;
    if (status) {
      this.setState({ status });
    }
  }

  componentDidUpdate(): void {
    this.updateStatus();
  }

  componentWillUnmount(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  handleStart = (): void => {
    const { duration } = this.props;
    const status = this.nextStatus;

    this.nextStatus = null;
    this.setState({ status, animating: true }, () => {
      const durationType = TRANSITION_TYPE[status];
      const durationValue = normalizeTransitionDuration(duration, durationType);

      invoke(this.props, 'onStart', null, { ...this.props, status });
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
      this.timeoutId = setTimeout(this.handleComplete, durationValue);
    });
  };

  handleComplete = (): void => {
    this.timeoutId = null;
    const { status: current } = this.state;

    invoke(this.props, 'onComplete', null, { ...this.props, status: current });

    if (this.nextStatus) {
      this.handleStart();
      return;
    }

    const status = this.computeCompletedStatus();
    const callback = current === TransitionStatus.Entering ? 'onShow' : 'onHide';

    this.setState({ status, animating: false }, () => {
      invoke(this.props, callback, null, { ...this.props, status });
    });
  };

  updateStatus = (): void => {
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

  computeClasses = (): string => {
    const { animation, directional, children } = this.props;
    const { animating, status } = this.state;

    const childClasses = get(children, 'props.className');
    const isDirectional = isNil(directional)
      ? includes(DIRECTIONAL_TRANSITIONS, animation)
      : directional;

    if (isDirectional) {
      return cx(
        animation,
        childClasses,
        useKeyOnly(animating, 'animating'),
        useKeyOnly(status === TransitionStatus.Entering, 'in'),
        useKeyOnly(status === TransitionStatus.Exiting, 'out'),
        useKeyOnly(status === TransitionStatus.Exited, 'hidden'),
        useKeyOnly(status !== TransitionStatus.Exited, 'visible'),
        'transition'
      );
    }

    return cx(animation, childClasses, useKeyOnly(animating, 'animating transition'));
  };

  computeCompletedStatus = (): TransitionStatus => {
    const { unmountOnHide } = this.props;
    const { status } = this.state;

    if (status === TransitionStatus.Entering) {
      return TransitionStatus.Entered;
    }
    return unmountOnHide ? TransitionStatus.Unmounted : TransitionStatus.Exited;
  };

  computeInitialStatuses = (): {initial: TransitionStatus, next?: TransitionStatus} => {
    const {
      visible,
      mountOnShow,
      transitionOnMount,
      unmountOnHide,
    } = this.props;

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

  computeNextStatus = (): TransitionStatus => {
    const { animating, status } = this.state;
    const { visible } = this.props;

    if (!visible) {
      if (
        status !== TransitionStatus.Exited
        && status !== TransitionStatus.Unmounted
        && status !== TransitionStatus.Exiting
      ) {
        return TransitionStatus.Exiting;
      } else {
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

  computeStatuses = (props: Props): {current?: TransitionStatus, next: TransitionStatus} => {
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

  computeStyle = (): React.CSSProperties => {
    const { children, duration } = this.props;
    const { status } = this.state;

    const childStyle = get(children, 'props.style');
    const type = TRANSITION_TYPE[status];
    const animationDuration = type && `${normalizeTransitionDuration(duration, type)}ms`;

    return { ...childStyle, animationDuration };
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render(): React.ReactNode {
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
