//Introduction to React
/*
    Learning Objectives
        - Express the general characteristics of Javascript frameworks and libraries
        - Create a new project using React
        - Create React components within your React application
        - Express what is meant by full-stack web development
*/

//Welcome to Front-End Web Development with React
/*
    Course Outline
        - React (Library and ecosystem)
        - Reactstrap (Styling the views in the React component)
        - Redux (structuring the architecture of your react + redux application)
        - Fetch (for interacting with the server side from our react application)

    Module 1: Introduction to React
        - Full Stack Web Development: The Big Picture
        - Setting up your Development Environment: Git and Node
        - Introduction to React
        - React Components
        - Assignment 1
    
    Module 2: React Router and Single Page Applications
        - React Component Types
        - React Router
        - Single Page Applications
        - Assignment 2

    Module 3: React Forms, Flux Architecture and Introduction to Redux
        - Controlled Forms
        - Uncontrolled Forms
        - Introduction to Redux
        - React Redux Form
        - Assignment 3

    Module 4: More Redux and Client-Server Communication
        - Redux Actions
        - Redux Thunk
        - Client-Server Communication
        - Fetch
        - React Animations
        - Building and Deployment
        - Testing
        - Assignment 4
*/

//How to Use the Learning Resources

//Welcome to Front-End Web Development with React: Additional Resouces


//Full-Stack Web Development: The Big Picture
//Full-Stack Web Development: The Big Picture: Objectives and Outcomes
/*
    - Understand what is meant by full stack in the context of web development
    - Distinguish between front-end, back-end and full stack web development
    - Understand the position of this course in the context of this specialization
*/

//What is Full-Stack Web Development
/*
    Front end and Back end
        - Front end / Client-side
            - HTML, CSS, and Javascript
        - Back end / Server-side
            - Various technologies and approaches
            - PHP, Java, ASP.NET, Ruby, Python

    Three Tier Architecture
        - Presentation layer
        - Business Logic layer
        - Data Access layer
*/

//Full Stack Web Development: Additional Resources


//Setting up your Development Environment: Git and Node
//Setting up Your Development Environment: Git and Node: Objectives and Outcomes
/*
    - Set up a Git repository and perform basic Git operations
    - Set up and use online Git repositories
    - Use Node-based modules to perform basic operations.
*/

//Setting up Git

//Basic Git Commands

//Online Git Repositories

//Noje.js and NPM

//Setting up Node.js and NPM

//Basics of Node.js and NPM

//Setting up your Development Environment: Git and Node: Addtional Resources


//Introduction to React
//Introduction to React: Objectives and Outcomes
/*
    - Get a basic overview of JavaScript framewroks and libraries
    - Understand the architecture of an React application
    - Scaffold out a starter React application using create-react-app, the command line tool
*/

//Front-end JavaScript Frameworks and Libraries Overview
/*
    Why JavaScript Libraries/Frameworks?
        - Complexity of managing DOM manipulation and data updates manually
        - Well defined application architectures:

    Software Library
        - Collection of implementations of behavior with a well-defined interface by which the behavior is invoked
        - Reuse of behavior
        - Modularity
        - E.g., jQuery
    
    Software Framework
        - Abstraction in which software provides generic functionality that can be selectively changed by additional user-written code
        - Universal, reusable environment that provides particular functionality as part of a larger software platform
        - E.g., Angular, Ember, Backbone

    Library vs Framework
        The following borrowed from AngularJS documentation makes the distiction clear:
            - a library - a collection of functions which are useful when writing web apps. 
            Your code is in charge and it it calls into the library when it sees fit. E.g., jQuery
            - frameworks - a particular implementation of a web application, where your 
            code fills in the details. The framework is in charge and it calls into your 
            code when it needs something app specific. E.g., Angular, Ember, etc.

    Framework
        - Hollywood Principle
            - Don't call us, we'll call you!
        - Inversion of Control
        - Imperative vs Declarative Programming

    JavaScript Frameworks
        -  Single Page Application
            - Rich Internet Applications
        - Model-View-Controller (MVC) / Model-View-ViewModel (MVVM) / Model-View-Whatever
            - Data binding, routing
        - Scalable, Reusable, Maintanable JS code
        - Test driven development

    JavaScript Frameworks/Libraries
        - Angular
        - React
        - Vue
*/

//Introduction to React
/*
    What is React?
        - A JavaScript library for building user interfaces
        - Declarative
        - Component-based
        - Technology stack agnostic
    
    React History
    React
        - Designed by Jordan Walke
        - First deployed on Facebook's newsfeed in 2011
        - Open-sourced at JSConf US in May 2013
        - Designed for speed, simplicity, and scalability
    
    React Vocabulary
    - One-way data flow         - Virtual DOM
    - JSX                       - Element
    - Components                - Flux / Redux
    - State                     - Testing
    - Props
*/

//Getting Started with React
/*
    Objectives and Outcomes
        - Install create-react-app
        - Scaffold out a basic React application

    Installing create-react-app
        - yarn global add create-react-app@1.5.2 / npm install -g create-react-app
        - create-react-app --help

    Generating and Serving a React Project using create-react-app
        - create-react-app confusion
        - yarn start / npm start

    Initialialize a Git Repository
        - git init
        - git add .
        - got commit -m "Initial Setup"
*/

//React App Overview
/*
    React Element
        - Smallest building blocks of React apps
            - const element = <h1 className="App-title">Welcome to React</h1>;
        - Plain JS objects that are
            - Cheap to create
        - Components are "made of" elements
            - class App extends Component {...}

    Rendering to the DOM
        - Rendered using ReactDOM. See index.js
            - ReactDOM.render(<App />, document.getElementById('root'));
        - Where is it rendered? See index.html
            - <div id="root"></div>
            - Root DOM node

    ReactDoom call function render to render the App.js to display in the root ID in index.html
*/

//Introduction to JSX
/*
    JXS = javascript + XML = HTML-like syntax extension for JavaScript
*/

//Configuring your React Application
/*
    - Configure your React Project to use Reactstrap
        - npm add bootstrap --save
        - npm add reactstrap --save
        - npm add react-popper --save
    - Configure to use Bootstrap 4
        - import 'bootstrap/dist/css/bootstrap.min.css';
    - Adding a Navigation Bar
        import { Navbar, NavbarBrand } from 'reactstrap';

        class App extends Component {
        render() {
            return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
            </div>
            );
        }
        }
*/
//Do a Git commit with the message "Configuring React"

//Introduction to React: Addtional Resources


//React Components
//React Components: Objectives and Outcomes
/*
    - Create a React component
    - Construct the React component code and the view for your component using JSX and JavaScript
*/

//React Components
/*
    React Components
        - A component returns a set of React elements that should appear on the screen
        - Components enable you to split your UI into independent, reusable pieces
        - Components also accept inputs
        - Different kinds of components can be defined in React

    Component Conventions
        - User-defined component names must always start with a capital letter
            - These compile to React.createElement(...)
        - Tags starting with lowercase letters are treated as DOM tags
            - Built-in components
*/

//Exercise: React Components Part 1
/*
        Objectives and Outcomes
            - Add components to your React application
            - Use JSX to define the views of your component
*/

//React Components: State and Props
/*
    State
        - Each component can store its own local information in its "state"
            - Private and fully controlled by the component
            - Cab be passed as props to children
        - Only class components can have local state
    
    State declared within the constructor:
        class Menu extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    selectedDish: null
                }
            }
            ...
        }
    
    State should only be modified using setState()
        onDishSelect(dish) {
            this.setState({ 
                selectedDish: dish
            });
        }

    Never do the following:
        this.state.selectedDish = dish;

    Props
        - JSX attributes are passed into a component as a single object
            - Available in the component as "props"
            - Can pass in multiple attributes
            - Cannot modify props within the component
        - Exmaples:
            <Menu dishes={this.state.dishes} />
                - Here the dishees are available as props within the Menu Component and can be accessed as this.props.dishes
                
            <Dishdetail dish={this.state.dish} comments={this.state.comments} />
                - Here dish is available as props within the Dishdetail Component and can be accessed as this.props.dish, and comments as this.props.comments

    Handling Events
        - Handling events is similar to the way you handle events on DOM elements:
            - Use camelCase to specify events
            - Pass function as the event handler
        
        - Example:
            <Card onClick={() => this.onDishSelect(dish)}>
    
    Lifting State Up
        - Sometimes several components may share the same data
        - Change to data in one component nneds to be reflected to another component
        - Best to move the shared state to a common ancestor component

    Lists and Keys
        - List are handled similar to Javascript
        - Example: 
            const menu = this.props.dishes.map((dish) => {
                return (
                    <div key={dish.id}>
                        <h1>{dish.name}</h1>
                        <p>{dish.description}</p>
                    </div>
                );
            });
        Keys should be given to elements inside the array
            - Help identify which items have changed, are added or removed
*/

//Exercise: React Components Part 2
/*
    Objectives and Outcomes
        - Make use of the Card component to display a list of items
        - Use the Card component to display detailed information

    In this exercise we used a list of Cards to display the information in the menu component. Also we used a card to display the details of a selected dish.
*/

//React Components: Lifecycle Methods Part 1
/*
    React Component Lifecycle
        - React Component goes through the following lifecycle stages:
            - Mounting
            - Updating
            - UnMounting
        - Several lifecycle methods available in each stage
    
    Mounting Lifecycle Methods
        - Called when an instance of a component is being created and inserted into the DOM:
            - constructor()
            - getDerievedStateFromProps()
            - render()
            - componentDidMount()
        - An earlier method now deprecated called componentWillMount()

    React Developer Tools
*/


//Assignment 1 Requirements: React Components





