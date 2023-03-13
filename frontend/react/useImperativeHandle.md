# useImperativeHandle

- `useImperativeHandle` hook allows you to determine which properties will be exposed on a ref.

1. It is used with the `React.forwardRef()` function and `ref` (associated with the compoent) from the parent function is passed to it which is hence passed to the useImperativeHandle as a first argument.

- Example: 

    ```JS
    const inputRef = useRef();

    const activate () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return { focus: activate }
    });
    ```