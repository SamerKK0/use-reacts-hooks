/// <reference types="react" />
declare const createReducerContext: <R extends import("react").Reducer<any, any>>(reducer: R, defaultInitialState: import("react").ReducerState<R>) => readonly [() => [import("react").ReducerState<R>, import("react").Dispatch<import("react").ReducerAction<R>>], ({ children, initialState, }: {
    children?: React.ReactNode;
    initialState?: import("react").ReducerState<R>;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<[import("react").ReducerState<R>, import("react").Dispatch<import("react").ReducerAction<R>>]>>, import("react").Context<[import("react").ReducerState<R>, import("react").Dispatch<import("react").ReducerAction<R>>]>];
export default createReducerContext;
