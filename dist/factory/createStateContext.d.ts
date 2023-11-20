/// <reference types="react" />
declare const createStateContext: <T>(defaultInitialValue: T) => readonly [() => [T, import("react").Dispatch<import("react").SetStateAction<T>>], ({ children, initialValue, }: {
    children?: React.ReactNode;
    initialValue?: T;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<[T, import("react").Dispatch<import("react").SetStateAction<T>>]>>, import("react").Context<[T, import("react").Dispatch<import("react").SetStateAction<T>>]>];
export default createStateContext;
