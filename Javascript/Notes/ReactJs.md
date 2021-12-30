# React.JS

## Resources:

## Github
    > https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components

## JSX
    > JSX - Javascript syntax extension (syntax extension to javascript)
    > After compilation, JSX expressions become regular javascript function calls and evaluate to javascript objects
    > In JSX, quotes for string values and curly braces for expressions
    > JSX is closer to javascript than HTML, so ReactDOM uses camelCase property naming convention instead of HTML attributes. Ex: class -> className, tabindex->        tabIndex 
    > JSX prevents injection attacks and XSS (cross site scripting attacks),  ReactDOM escapes any values embedded values in JSX and converts everything to string before rendering
    > JSX is a syntactic sugar for React.createElement

## React Element
    > Babel translates JSX into React Elements i,e <h1> {name} </h1> to React.createElement(..description)
    > React elements are objects which contains description and help React to create and update DOM
    > React elements are immutable, once created cannot update its children or attributes. To update need to create and render a new one

## React Updates
    > React updates only what is necessary
    > React uses a virtual DOM, i,e a tree datastructure virtually representing a real DOM, as real DOM updates are costly
    > React DOM compares the element and children to the previous one and only apply DOM updates necessary to bring the DOM to desired state


## Components
    > Components are made up of elements
    > Componets let us split UI into independent, reusable pieces and think about each piece in isolation (Basically seggregation of concern)
    > Always start component name with a capital letter, React treats components starting with lowercase letters as DOM tags for eg: <div/>  represents an HTML tag
    > Props are readonly, whether a function or a class component, it should never modify its props
    > PROPS: When react sees an element representing user defined component, it passes JSX attributes and children to this component as an object called props


## Life Cycle Methods

    > componentDidMount()

    > componentWillUnMount()

    > getDerivedStateFromError()  

    > componentDidCatch()

    > componentDidUpdate()

## Props Drilling
    > Passing props manually down at each level through the component tree is known as Props drilling

## Handling Events

    > The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

    > METHOD-1: If you want to pass args -  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    > METHOD-2: If you want to pass args -  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


## Logical Operations

    > in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false

## React Context

    > When to use contexts?
        - Contexts can be used when the data is global between a tree / hierarchy of components (share data between the tree)
        - Instead of props drilling i,e passing the props down the component tree manually at each level, context can be used
        - Using context, we can avoid passing props between the intermediate components

NOTE:
    > Redux and context are used to manage cross-component state or application wide state (states are just used to manage local state)


## React Hooks

    > Popular react hooks at glance - A list of react hooks

        - useState
        - useEffect
        - useReducer
        - useRef
        - useContext
        - useImperativeHandle

    > Rules of React Hooks:
        - Must call hooks only in react functions i.e in react components or react custom hooks only

        - Only call hooks at the top level of functions (do not call in nested functions or block statements)

## Error Boundaries

    > Only class based components can use error boundaries

    > Error boundaries are like try catch in javascript but for components

    > A class based component becomes an error boundary if it implements either or both of the lifecycle methods below
            - getDerivedStateFromError()
            - componentDidCatch()


## Higher Order Components (HOCs)

    > HOC takes a component and returns a new component

## Redux
    > Redux is used for state management in the react app
    > It is a central Data store
    > Components subscribe to the store and whenever data in the store changes, the store notifies the component. Component get the data they need and react accordingly
    > Components never directly manuplate the data in the store. Reducer function is responsible for mutating the data
    > Components trigger the data change by dispactching actions, and the redux forward the actions to the reducer (components trigger actions)
    > Action is just a javascript object describes the kind of operation the reducer should perform
    > Reducer then spits out a new state which replaces the existing state in the central data store. The subscribing components are then notified so that they update the UI



## React Router (Draft)
    > Install react-router-dom and import route from react-router-dom
	> Register router with the app by wrapping root component with <BrowserRouter> <app/> </BrowserRouter>
	> In APP.js register routes using the custom Route element ex. <Route path="/home"> <component-name/> </Route>
	> <a> for links reloads page, use <Link to="url"> prevents default behaviour. {Link} from react-router-dom
	> Use <NavLink activeClassName=""> to show active routes
    > Route with params - <Route path="products/:id"/> -- useParams hook from react-router-dom --- path can have multiple dynamic segments
	> Router matches from left to right and selects all that matches by checking starts with by default (not specific, but generic match that starts with)
	> Use Switch from react-router-dom to activate only the first matching route and use "exact" attribute to indicate select the exact match only