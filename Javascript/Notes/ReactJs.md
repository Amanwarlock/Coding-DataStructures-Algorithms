# React.JS

## JSX
    > JSX - Javascript syntax extension
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

## Props Drilling
    > Passing props manually down at each level through the component tree is known as Props drilling

## React Context


NOTE:
    > Redux and context are used to manage cross-component state or application wide state (states are just used to manage local state)

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