import { IHookStateInitAction, IHookStateSetAction } from './misc/hookState';
export default function useGetSet<S>(initialState: IHookStateInitAction<S>): ((newState: IHookStateSetAction<S>) => void)[];
