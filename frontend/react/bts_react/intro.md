`React.memo()` is used to prevent unnecessary components re-evaluation.

`useCallback` is used to store the object reference in the memory on the component function re-evaluation, which
will work seamlessly when using `Reat.memo()`. This will tell the memo whther the the value/prop/state has changed for the component or not.

`useCallback` may or may not depends upon a state variable. The syntax is as following;

```JS
    const toggleParagraphHandler = () => useCallback(() => {
        if(allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph)
        }
    }, [allowToggle])
```

`useMemo` is used to memoized some performance intensive tasks to be stored in memory henece stopping them from recalculations.
For example an inner component with some sorting algo will run the algo on the array for every change detection, so memoizing it
will result in better peroformance. Which will only recalculate when the dependency changes.

```JS
    const sortedList = useMemo(() => {
        return items.sort((a, b) => a - b);
    }, [items]);
```

