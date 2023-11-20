/// <reference types="react" />
declare const useVideo: (elOrProps: import("./factory/createHTMLMediaHook").HTMLMediaProps | import("react").ReactElement<import("./factory/createHTMLMediaHook").HTMLMediaProps, string | ((props: any, deprecatedLegacyContext?: any) => import("react").ReactElement<any, any>) | (new (props: any, deprecatedLegacyContext?: any) => import("react").Component<any, any, any>)>) => readonly [import("react").ReactElement<import("./factory/createHTMLMediaHook").HTMLMediaProps & {
    ref?: import("react").MutableRefObject<HTMLVideoElement>;
}, string | ((props: any, deprecatedLegacyContext?: any) => import("react").ReactElement<any, any>) | (new (props: any, deprecatedLegacyContext?: any) => import("react").Component<any, any, any>)>, import("./factory/createHTMLMediaHook").HTMLMediaState, {
    play: () => Promise<void>;
    pause: () => void;
    seek: (time: number) => void;
    volume: (volume: number) => void;
    mute: () => void;
    unmute: () => void;
}, import("react").MutableRefObject<HTMLVideoElement>];
export default useVideo;
