# `useMouseWheel` 
React Hook to get deltaY of mouse scrolled in window. 

## Usage

```jsx
import { useMouseWheel } from 'use-reacts-hooks';

const Demo = () => {
  const mouseWheel = useMouseWheel()
  return (
    <>
      <h3>delta Y Scrolled: {mouseWheel}</h3>
    </>
  );
};
```
