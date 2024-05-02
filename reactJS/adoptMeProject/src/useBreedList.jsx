/**
 * NOTE: This doesn't have to be a .jsx file if no JSX is used.
 * This file can work equally well by making it a .js file.
 */

import { useState, useEffect } from 'react';

// This is just a locally stored object
const localCache = {};

/**
 * Stores fetched breed list into "local cache" from API calls and re-uses them
 * if the breed selection is something that has been used before
 * @param {*} animal 
 */
export default function useBreedList(animal) {
    // More hooks to start with
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        // If an animal selection doesn't exist, there are no breeds to fetch for it
        if (!animal) {
            setBreedList([]);
        } 
        // If an animal selection already has fetched data from the API, re-use it
        else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } 
        // Otherwise, we need to fetch data from the API for the new animal selection
        else {
            requestBreedList();
        }

        // Remember to make functions that make API calls `async`!
        /**
         * But why is this async function inside the `useEffect()` function?
         * - We could take it out of the `useEffect()` scope, but then we'd
         *   have to add it to the list of dependencies in the `useEffect()` callback
         * - React will suggest you move the `requestBreedList()` function inside of the
         *   `useEffect()` scope
         * - Moreover, these operations are all stemming from one event/effect that causes
         *   the component to re-render, so it makes more sense to group it together logically
         */
        async function requestBreedList() {

            // Set the initial state of things
            setBreedList([]);
            setStatus("loading");

            // Make the API call and fetch the results into JSON form
            const result = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await result.json();

            // Store the newly fetched breed data for the animal selection and store it into "local cache"
            localCache[animal] = json.breeds || [];

            // Set the end state of things
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]); // Establish a dependency on `animal` so that this operation runs every time we change the animal selection

    return [breedList, status];
}