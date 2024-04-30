// You can import specific items from libraries via destructure
import { createRoot } from 'react-dom';
import Pet from './Pet';

// New way of writing React through JSX
const App = () => {
    <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Bubby" animal="Bird" breed="House Finch" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>;
};

// Grabs 'App' and renders it on the DOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);




/**
 * Graveyard of old code for learning
 */
// import React from 'react';
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