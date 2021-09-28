
## Redux
    > Redux is used for state management in the react app
    > It is a central Data store
    > Components subscribe to the store and whenever data in the store changes, the store notifies the component. Component get the data they need and react accordingly
    > Components never directly manuplate the data in the store. Reducer function is responsible for mutating the data
    > Components trigger the data change by dispactching actions, and the redux forward the actions to the reducer (components trigger actions)
    > Action is just a javascript object describes the kind of operation the reducer should perform
    > Reducer then spits out a new state which replaces the existing state in the central data store. The subscribing components are then notified so that they update the UI