import * as React from 'react';
import './transition.less';
declare enum TransitionStatus {
    Entered = "ENTERED",
    Entering = "ENTERING",
    Exited = "EXITED",
    Exiting = "EXITING",
    Unmounted = "UNMOUNTED"
}
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
    static defaultProps: Partial<Props>;
    protected timeoutId: any;
    protected nextStatus: TransitionStatus;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleStart: () => void;
    handleComplete: () => void;
    updateStatus: () => void;
    computeClasses: () => string;
    computeCompletedStatus: () => TransitionStatus;
    computeInitialStatuses: () => {
        initial: TransitionStatus;
        next?: TransitionStatus;
    };
    computeNextStatus: () => TransitionStatus;
    computeStatuses: (props: Props) => {
        current?: TransitionStatus;
        next: TransitionStatus;
    };
    computeStyle: () => React.CSSProperties;
    render(): React.ReactNode;
}
export {};
