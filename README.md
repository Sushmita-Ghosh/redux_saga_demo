# redux_saga_demo

This repo contains the working example and explaination of redux saga from this [link](https://www.youtube.com/watch?v=-RuLHMF-KFE&t=576s).

## DEFINITION:

## REDUX THUNK VS REDUX SAGA:

## SOME POINTERS:
* The middleware option in configurestore takes middleware - where we need to pass defaultMiddlewares - these are middlewares already present like thunk etc
* Saga is built on the concept of generator functions - why? Redux saga pauses and resumes the functions , hence generators are used
* There are two parts to Redux Saga - watcher and worker - The watcher saga waits for the action to be dispatched, and once it find such an action it calls the worker saga - and pauses the function untill the execution is finished.
* The "yield" keyword is quite similar to await.
* If we want to dispatch actions in redux saga - we need to use "put".
* takeLatest - if a user clicks on a button many times only the latest click is taken into consideration - rest are discarded - but takeEvery will siapatch actions on every click.
*  takeLatest always takes the latest action dispatched vs takeEvery triggers the action every time it received the input.
*  to delay a worker saga - we can use the "delay" function.
*  to call a function- which is fetching some data - doing some async operation we can use call - (takes 2 arguments - first is the function ref, second any value that needs to be passed)
*  if there are more than 1 saga in our application and we want them to run parallely then we can use "all" keyword
