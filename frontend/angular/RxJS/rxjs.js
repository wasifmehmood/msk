// RxJS: A microsoft project. It is "A stream of zero, one or more values".

// Observable can emit multi values. (Promise is only single value emitter).
// They both clean themselves.
// Observables can be cancellable.
// They provide multiple operators.
// Lazy/Cold by nature. Observables do not start emitting data until an observer has subscribed.

// Has a push mechanism despite of a pull. (Not like Generators/Iterable).

//** Note */
// Http calls and router events shouldn't have to be unsubscribe manually
    // they underneath completes itself automactically.
// Manually created observables have to be unsubscribed.

//** Usecases */
// User interactions (mouse, keyboard, debouncing/throttling etc) => Multi value
// AJAX => Single Value
// Animations => Multi value
// Websockets, Workers etc => Multi value

// E.g.
// Observable constructor.
let $obs = new Observable(observer => {

    // the observer lets us push values.
    observer.next(1);
    observer.next(2);
    observer.next(3);

    // it lets us propagate errors
    observer.error('oops');

    // and lets us (optionally) complete the stream.
    observer.complete();
});

$obs.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('done')
);

//** Observable */ 
// It only reads the values emmitted. It can be transformed and subscribed.
// We can implement the observer interface inside the observable constuctor to emit the values.
// $obs.next(4); is not possible outside the observable constructor as we can only subscribe to it.

//** Subject */
// It implements both the observable and observer interface.
// Values can be emitted from it and it can be subscribed to.
// $obs.next(4); is possible outside the observable constructor if its Subject instead of the Observable.
// It doesn't have the initial value. If the value is emitted before subscribe it is lost.

//**  Behaviour Subject  */
// It has the initial value.
// It has stored the last emitted value in it.

//** ReplaySubject */
// It has an infinte memory.
// It stores all the emitted values in itself.

//************ Disposing Observables start ************/
let $dispObs = new Observable(observer => {
    let count = 0;
    let interval = setInterval(() => {
        observer.next(count++);
    }, 1000);

    return () => {
        clearInterval(interval);
    }
});

let subscriber = $dispObs.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('done')
);

subscriber.unsubscribe();
//************ Disposing Observables end ************/

//************ Observable with stream of events start ************/

const myInput = document.getElementById('myInput');

// stream of click Events
let keyups$ = Observable.fromEvent(myInput, 'keyup');

// map to values
let inputs$ = keyups$.map(ev => ev.target.value);

// flatMap our inputs to *http response*
let responses$ = 
    inputs$
        .flatMap(text => Http.get(`foo.com/search/${text}`))
        .map(res => res.json());

responses$.subscribe(text => console.log(text));

//************ Observable with stream of events end ************/

//************ Http polling start ************/
let ticks$ = Observable.interval(5000);

let responses$ = 
    inputs$
        .flatMapLatest(() => Http.get(`stocks.json`))
        .map(res => res.json());

let stockPoller$ = responses$.subscribe(text => console.log(text));

stockPoller$.unsubscribe();
//************ Http polling end ************/

//** Useful Methods */
// scan() => works similar as Array reduce method.
// flatMapLatest() => Works similar like flatMap but cancels the previously unresolved observable.

// Resources:
// https://www.youtube.com/watch?v=VLGCCpOWFFw&t=2017s
// https://www.youtube.com/watch?v=UHI0AzD_WfY&t=1602s



// exhaustMap: The exhaustMap operator is used to flatten an observable sequence by ignoring new inner observables 
// while an inner observable is still active. It waits for the current inner observable to complete before subscribing
// to the next one. This ensures that only one inner observable is active at a time. If a new outer value arrives while 
// an inner observable is active, it is ignored until the inner observable completes. Once the inner observable completes, 
// it allows the next outer value to trigger the subscription to a new inner observable.

// concatMap: The concatMap operator is used to sequentially flatten an observable sequence. It maintains the order of the 
// emitted values and subscribes to the next inner observable only after the current inner observable has completed. 
// It guarantees that the order of the emitted values will be the same as the order of the outer observable sequence.

// mergeMap (or flatMap): The mergeMap operator is used to concurrently flatten an observable sequence. It subscribes to 
// all inner observables as they arrive, allowing for parallel execution of inner observables. The emitted values are merged 
// together in the order of their arrival, resulting in a non-deterministic order of the output.

// switchMap: The switchMap operator is used to flatten an observable sequence by canceling the previous inner observable as 
// soon as a new outer value arrives. It switches to the latest inner observable emitted by the outer observable and 
// unsubscribes from the previous inner observable. This is useful when you want to respond only to the latest value and
// ignore the previous values.

// forkJoin: The forkJoin operator is used to combine multiple observables into a single observable that emits an array of 
// the last values from each input observable. It waits for all input observables to complete and then emits a single array 
// containing the last value from each observable. It is commonly used for making multiple requests in parallel and waiting 
// for all responses to arrive before performing further operations.