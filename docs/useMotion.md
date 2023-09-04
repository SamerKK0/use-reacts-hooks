# `useMotion`

React sensor hook that uses device's acceleration sensor to track its motions.


## Usage

```jsx
import {useMotion} from 'use-reacts-hooks';

const Demo = () => {
  const state = useMotion();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
```
