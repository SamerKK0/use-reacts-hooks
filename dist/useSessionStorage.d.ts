declare const useSessionStorage: <T>(key: string, initialValue?: T, raw?: boolean) => [T, (value: T) => void];
export default useSessionStorage;
