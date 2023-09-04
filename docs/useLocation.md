# `useLocation`

React sensor hook that tracks brower's location.

For Internet Explorer you need to [install a polyfill](https://github.com/SamerKK0/use-reacts-hooks/issues/73).


## Usage

```jsx
import {useLocation} from 'use-reacts-hooks';

const Demo = () => {
  const state = useLocation();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
```
