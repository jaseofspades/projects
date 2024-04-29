const Pet = (props) => {
    // NOTE: React will automatically put all items in the child component parameter
    //       into an array if you don't explicitly add the []'s
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

// Writing code here to start a pure React app:
const App = () => {
    // NOTE: You won't need to use this anymore once we go into using JSX
    //       since JSX automatically uses createElement() behind the scenes
    return React.createElement(
        "div",  // What HTML element are we making?
        {},     // What attributes will the HTML element have? (i.e. id, class, style)
                
        // What are the children HTML elements?
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                animal: "Dog",
                name: "Luna",
                breed: "Havanese"
            }),
            React.createElement(Pet, {
                animal: "Bird",
                name: "Bubby",
                breed: "House Finch"
            }),
            React.createElement(Pet, {
                animal: "Cat",
                name: "Doink",
                breed: "Mixed"
            }),
        ]
    )
};

// Grabs 'App' and renders it on the DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

/**
 * Notice that we pass in a whole component and not specific HTML elements?
 * 'App' is a component, but it's essentially a function that makes other HTML elements.
 * Think macro components that are made up of micro components
 */
root.render(React.createElement(App));