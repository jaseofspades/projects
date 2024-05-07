/**
 * NOTE: This doesn't have to be a .jsx file if no JSX is used.
 * This file can work equally well by making it a .js file.
 */

import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";


export default function useBreedList(animal) {
    // (This is where the useEffect() code used to be!)

    const results = useQuery(["breeds", animal], fetchBreedList);

    // Remember, there's no keywords `async` and `await` here, so we need to assume `results`
    // is not available right away

    // `results?` is basically saying if this is available, provide me `data`
    // `.data?` is basically saying if results is available, and `data` is available, provide me `breeds`
    // otherwise give me an empty array instead of an error
    return [results?.data?.breeds ?? [], results.status];
}











// Code graveyard
/**
     * Unfortunately, `useEffect()` is going to be the hardest part of React to understand because
     * it's not always obvious what the subsequent effects are after a component renders.
     * 
     * But the nice thing is that these complicated operations are better abstracted through React Query!
     */
// // This is just a locally stored object
// const localCache = {};

// /**
//  * Stores fetched breed list into "local cache" from API calls and re-uses them
//  * if the breed selection is something that has been used before
//  * @param {*} animal 
//  */
// useEffect(() => {
//     // If an animal selection doesn't exist, there are no breeds to fetch for it
//     if (!animal) {
//         setBreedList([]);
//     } 
//     // If an animal selection already has fetched data from the API, re-use it
//     else if (localCache[animal]) {
//         setBreedList(localCache[animal]);
//     } 
//     // Otherwise, we need to fetch data from the API for the new animal selection
//     else {
//         requestBreedList();
//     }

//     // More hooks to start with
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");

//     return [breedList, status];

//     // Remember to make functions that make API calls `async`!
//     /**
//      * But why is this async function inside the `useEffect()` function?
//      * - We could take it out of the `useEffect()` scope, but then we'd
//      *   have to add it to the list of dependencies in the `useEffect()` callback
//      * - React will suggest you move the `requestBreedList()` function inside of the
//      *   `useEffect()` scope
//      * - Moreover, these operations are all stemming from one event/effect that causes
//      *   the component to re-render, so it makes more sense to group it together logically
//      */
//     async function requestBreedList() {

//         // Set the initial state of things
//         setBreedList([]);
//         setStatus("loading");

//         // Make the API call and fetch the results into JSON form
//         const result = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
//         const json = await result.json();

//         // Store the newly fetched breed data for the animal selection and store it into "local cache"
//         localCache[animal] = json.breeds || [];

//         // Set the end state of things
//         setBreedList(localCache[animal]);
//         setStatus("loaded");
//     }
// }, [animal]); // Establish a dependency on `animal` so that this operation runs every time we change the animal selection