//@ts-ignore
//@ts-nocheck
import useEffectOnce from './useEffectOnce';

const useMount = (fn: () => void) => {
  useEffectOnce(() => {
    fn();
  });
};

export default useMount;
