//@ts-ignore
//@ts-nocheck
import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from './misc/util';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
