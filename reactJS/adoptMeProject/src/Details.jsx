// `useParams` allows you to access parameters in the URL through something called CONTEXT from parent component to its children
// WARNING: The parameter name has to be destructured with the same name as the parameter you're trying to access:
// ex: <Link to={`/details/${id}`} className="pet"> will need `const {id} = useParams();`
//
// This is possible because `useParams` assumes a `BrowserRouter` is available and it reaches into it to pull out a parameter
// by the name used in the `BrowserRouter`
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';

const Details = () => {
    const { id } = useParams();
    /**
     * This is how `useQuery()` works:
     * - We give it a 'key' to name the key we're caching the results under, in this case 'details'
     *   and it can be named as anything you want
     * - You then supply it with a parameter to query with, in this case 'id'
     * - The values you pass in (i.e. ["details", id]) are packaged into array brackets [ ]
     *   and this parameter is called the Query Key
     * - Once data is fetched and stored under the cache key, you can access the same data with the same key
     *   without having to re-fetch data again (assuming the key's TTL is set to infinity or you're within the TTL time limit)
     * 
     * Note that in the `fetchPet` component, we take in a parameter called `queryKey` that assumes the data is in array format:
     *   const fetchPet = async ({queryKey}) => {
     *       const id = queryKey[1];
     *
     * - Now, if for whatever reason the cache doesn't have the 'details' key, a 2nd parameter can be added to tell React Query
     *   what to run in order to fetch that data--in this case, run `fetchPet` to make the fetch call
     * - When `fetchPet` runs, `["details", id]` will be passed in as the `queryKey`
     */
    const results = useQuery(["details", id], fetchPet);

    // Resolving `useQuery()` will take time, and since there's no `await` or `async` keywords being used we have to wait until the
    // results are fully loaded before the component re-renders
    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🐻</h2>
            </div>
        );
    };

    if (results.error) {
        return (
            <div>Uh oh.</div>
        );
    };

    // By this point, we can assume data is loaded properly
    const pet = results.data.pets[0];

    return (
        <div className="details">
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.name} - {pet.breed} - {pet.city}, {pet.state}
                    <button> Adopt {pet.name} </button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    )
};

export default Details;