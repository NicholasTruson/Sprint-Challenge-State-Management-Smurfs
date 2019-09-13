1. What problem does the context API help solve?

Context helps to aviod a cumbersome work flow from top down prop drilling with many components by storing data in a contect object and calling it only when the component requires it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Are messages dispatched to the "Redux Store" to give feedback on state management

Reducers: Are state management patterns which allow for predictable state management.

Store: The store it the 'truth' object because every change made within a redux app is represented in the store.  It is the master object which wraps around the entire app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state, component state is a local state.  Component state is better suited for smaller apps when using prop parent/child prop

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware allows for the use of API calls from action creators

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux - the work flow is making more and more sense to me as I practice it.
