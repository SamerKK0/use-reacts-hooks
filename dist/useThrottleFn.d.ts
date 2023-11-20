declare const useThrottleFn: <T, U extends any[]>(fn: (...args: U) => T, ms: number, args: U) => T;
export default useThrottleFn;
