import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    
    // (This is where most of the useEffect and hooks code used to be!)
    // Normally we could use hooks like we are here to track individual states of individual variables
    // and have them be updated with each call to `requestPets().
    // But what if we can let the browser handle these state updates and pull the updated parameters off the browser?
    // This approach uses something called "Uncontrolled Forms"

    // This is the "uncontrolled" part of the form input because we're no longer keeping track of those variables
    // through the use of hooks.

    // Instead, we're using hooks to keep track of `requestParams` as an object so that we don't re-submit queries into
    // `useQuery()` as we type in a location letter by letter, thereby creating multiple caches for each re-render per letter.

    // This way, we only update these parameters every time we submit a new search, while re-using already fetched results
    // by accessing cache through React Query
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    // This is the "controlled" part of the form input
    // `animal` here is a dependency in which `breeds` depend on when calling `useBreedList()`
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);


    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
      <div className="search-params">

        {/* 
            `form onSubmit`
            This setup is specifically to prevent the actual submission of the form, because we're making a mock API
            call to request pets based on the parameters specified in the form.

            This is called "Controlled Forms", but it's not best practice. This is strictly for understanding states.
            - We don't do anything with `animal`, `breed`, `location` until we click on Submit
            - Typically with forms, we use "Uncontrolled Forms" where we just pass in the parameters filled in from the form to an endpoint via browser
        */}
        {/* <form onSubmit={event => {
            event.preventDefault();
            requestPets();
        }}> */}

        {/* This is the "Uncontrolled Forms" approach: */}
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                // `FormData` allows you to pass in form data and return the results into a parsed object
                const formData = new FormData(event.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                };

                setRequestParams(obj);
            }}
        >

          <label htmlFor="location">
            Location
            <input 
                name="location" // This is needed for forms
                id="location" 
                placeholder="Location" 
            />
          </label>

          <label htmlFor="animal">
            Animal
            <select 
                id="animal"
                value={animal}
                // Event: explicitly changing a selection
                onChange={(event) => {
                    setAnimal(event.target.value);

                    // This is to reset the `breed` if `animal` selection is updated
                    // Deprecated from using React Query
                    // setBreed("");
                }}
            >
                {ANIMALS.map((animal) => (
                    <option key={animal}> 
                        {animal} 
                    </option>
                ))}
            </select>
          </label>

          <label htmlFor="breed">
            Breed
            <select 
                id="breed"
                disabled={!breeds.length}
                name="breed"
            >
                <option />
                {breeds.map((breed) => (
                    <option key={breed}> {breed} </option>
                ))}
            </select>
          </label>

          <button>Submit</button>

        </form>
        <Results pets={pets}/>
      </div>
    );
  };
  
  export default SearchParams;





/**
 * Code graveyard
 * 
 *     /**
    * NOTE:
    * - Never put hooks inside conditionals, ever
    * - `const` suggests `location` is immutable, but it's because it's never reassigned a different
    *      value than the one it starts with to keep track of
    * - By convention, all hooks start with `use`
    * - Destructuring variables from the hook [stuff, setStuff] works this way because the return value
    *      from use__() is an array
 
    /**
     * `useEffect` allows you to say do a render of this component first so the user can see something.
     * As soon as the render is done, then do something (the something here being an effect).
     * 
     * `useEffect` runs EVERY time you re-render the component that it's called in.
     * - It also has a second parameter where you can pass in dependencies, which tells the `useEffect`
     *   to only re-render the component if the dependent variables have state changes.
     * - If you use `[]` as the list of dependencies, the component will render ONCE and never re-render again
     * - If you add any variables to the `[]`, the component re-renders every time any of those variables update
     *
    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const result = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await result.json();

        setPets(json.pets);
    }
*/