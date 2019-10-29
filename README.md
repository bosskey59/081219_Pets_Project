## Redux FAQ:
- **What is redux and what problem does Redux Solve?**
  - Redux gives us a global store that all components can connect to so that we no longer have to pass everything from a parent

- **What does the global store consist of?**
  - The global store consist of reducers which contain their own state that we can connect to. It is controller by a switch to which we can direct the path of the Reducer from certain actions we take like adding a pet object to our state.

- **What are actions?**
  - Actions are functions that let us be able to dispatch to the reducer. Dispatching to the reducer is how we are able to update our global store's state.

- **How can we access the global store?**
  - We have to "connect" our component to the store which allows us to be able to map state to props to access the store.

- **Map state to props? What is that?**
  - When we say map state to props, we are saying, we are mapping the state of the store to the properties of our component we have connected. It's a function we define that return an object consisting of keys we want to call our props and the value of the store.reducer.state that we want to access.

- **You mentioned dispatching actions to the reducer, so we just import an action and call it to connect?**
  - Super close! Just as we have map state to props. We also have map dispatch to props. Redux gives us a dispatch function that will go through our reducers and match the action that's been given to the reducers switch statement.

- **Mind blown. Too much to compute**
  - Totally fine, none of this makes sense right now. We've only talked about it. Hands on experience will let you grasp these understandings just like any framework / library being learned. Sit back, relax, enjoy redux.


## REDUX FLOW

mapDispatchToProps => dispatch action => update reducer => mapStateToProps

## REDUX Dependency Installation
npm users
```
npm install redux react-redux --save
```

yarn users
```
yarn add redux react-redux
```