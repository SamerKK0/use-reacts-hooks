import { Handler, KeyFilter } from './useKey';
declare const useKeyPressEvent: (key: string | KeyFilter, keydown?: Handler | null | undefined, keyup?: Handler | null | undefined, useKeyPress?: (keyFilter: KeyFilter) => [boolean, KeyboardEvent]) => void;
export default useKeyPressEvent;
