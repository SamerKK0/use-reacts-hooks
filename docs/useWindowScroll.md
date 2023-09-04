# `useWindowScroll`

React sensor hook that re-renders on window scroll.

## Usage

```jsx
import {useWindowScroll} from 'use-reacts-hooks';

const Demo = () => {
  const {x, y} = useWindowScroll();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
```
