/// <reference types="react" />
declare const useDefault: <TStateType>(defaultValue: TStateType, initialValue: TStateType | (() => TStateType)) => readonly [TStateType, import("react").Dispatch<import("react").SetStateAction<TStateType>>];
export default useDefault;
