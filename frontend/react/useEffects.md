# useEffects => Effects(Side Effects)

# debouncing
```JS
useEffect(() => {

    const timer = setTimeout(() => {
        console.log('Timer ran after 500ms');
    }, 500);

    return () => {
        clearTimeout(timer);
    }
});
```

- When the state depends upon the other state properties and not only on its previos value then this approach is prefferd.

```JS
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 1000);

        return () => {
            clearTimeout(identifier);
        }

    }, [emailIsValid, passwordIsValid]);
```

- Alternative way is with `useState` hook which is used when the state depends upon the previous state value;

```JS
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);

    const toggleParagraphHandler = () => {
        setEmailIsValid(true);
    }
```