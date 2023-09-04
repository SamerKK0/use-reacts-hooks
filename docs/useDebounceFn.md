# `useDebounceFn`

React hooks that takes a function as an argument and debounce it

## Usage

```jsx
export default () => {
  const [value, setValue] = useState(0);
  const run = useDebounceFn(() => {
    setValue(value + 1);
  }, 500);

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        Click fast!
      </button>
    </div>
  );
};
```

## Reference

```ts
function useDebounceFn<T extends (...args: any) => any>(
  fn: T,
  wait?: number,
  options?: DebounceOptions
): debounce<(...args_0: Parameters<T>) => ReturnType<T>>;
```

- **`fn`**_`: Function`_ - function that will be called;
- **`wait`**_`: number`_ - delay in milliseconds;
- **`options`**_`: DebounceOptions`_ - {
  atBegin?: boolean;
  };
