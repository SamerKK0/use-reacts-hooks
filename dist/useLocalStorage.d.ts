import { Dispatch, SetStateAction } from 'react';
declare type parserOptions<T> = {
    raw: true;
} | {
    raw: false;
    serializer: (value: T) => string;
    deserializer: (value: string) => T;
};
declare const useLocalStorage: <T>(key: string, initialValue?: T, options?: parserOptions<T>) => [T, Dispatch<SetStateAction<T>>, () => void];
export default useLocalStorage;
