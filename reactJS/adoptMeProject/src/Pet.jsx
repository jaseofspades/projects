// import React from 'react';

// The old way of doing things without JSX
// const Pet = (props) => {
//     // NOTE: React will automatically put all items in the child component parameter
//     //       into an array if you don't explicitly add the []'s
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     ]);
// };

// The new way of doing things with JSX
const Pet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    );
};

export default Pet;