import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from "./SearchParams";
import Details from "./Details";

/**
 * `QueryClient` can help abstract what `useEffect()` does and its cache is stored in-memory
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // How long do we want to cache the results after fetching them?
            // If finite, then use math in milliseconds (i.e. 1000ms * 60s * 10m = 10 minutes)
            // If infinite, use `Infinity`
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    }
});

const App = () => {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            {/* If you use a header like this to allow for the user to return home with a link, ensure the header
                is inside the `BrowserRouter` component */}
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
                {/* In React v6, routes can take parameters in the form of `:paramName` */}
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
            </Routes>
        </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);




// import React from 'react';
// // import ReactDOM from 'react-dom';
// // You can import specific items from libraries via destructure
// import { createRoot } from 'react-dom';

// const Pet = (props) => {
//     // NOTE: React will automatically put all items in the child component parameter
//     //       into an array if you don't explicitly add the []'s
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     ]);
// };

// // Writing code here to start a pure React app:
// const App = () => {
//     // NOTE: You won't need to use this anymore once we go into using JSX
//     //       since JSX automatically uses createElement() behind the scenes
//     return React.createElement(
//         "div",  // What HTML element are we making?
//         {},     // What attributes will the HTML element have? (i.e. id, class, style)
                
//         // What are the children HTML elements?
//         [
//             React.createElement("h1", {}, "Adopt Me!"),
//             React.createElement(Pet, {
//                 animal: "Dog",
//                 name: "Luna",
//                 breed: "Havanese"
//             }),
//             React.createElement(Pet, {
//                 animal: "Bird",
//                 name: "Bubby",
//                 breed: "House Finch"
//             }),
//             React.createElement(Pet, {
//                 animal: "Cat",
//                 name: "Doink",
//                 breed: "Mixed"
//             }),
//         ]
//     )
// };

// // Grabs 'App' and renders it on the DOM
// const container = document.getElementById("root");
// const root = createRoot(container);

// /**
//  * Notice that we pass in a whole component and not specific HTML elements?
//  * 'App' is a component, but it's essentially a function that makes other HTML elements.
//  * Think macro components that are made up of micro components
//  */
// root.render(React.createElement(App));