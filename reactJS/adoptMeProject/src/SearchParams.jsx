import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    
    /**
     * NOTE:
     * - Never put hooks inside conditionals, ever
     * - `const` suggests `location` is immutable, but it's because it's never reassigned a different
     *      value than the one it starts with to keep track of
     * - By convention, all hooks start with `use`
     * - Destructuring variables from the hook [stuff, setStuff] works this way because the return value
     *      from use__() is an array
     */
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    /**
     * `useEffect` allows you to say do a render of this component first so the user can see something.
     * As soon as the render is done, then do something (the something here being an effect).
     * 
     * `useEffect` runs EVERY time you re-render the component that it's called in.
     * - It also has a second parameter where you can pass in dependencies, which tells the `useEffect`
     *   to only re-render the component if the dependent variables have state changes.
     * - If you use `[]` as the list of dependencies, the component will render ONCE and never re-render again
     * - If you add any variables to the `[]`, the component re-renders every time any of those variables update
     */
    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const result = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await result.json();

        setPets(json.pets);
    }

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
        <form onSubmit={event => {
            event.preventDefault();
            requestPets();
        }}>

          <label htmlFor="location">
            Location
            <input 
                onChange={(event) => setLocation(event.target.value)}
                id="location" 
                value={location} 
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
                    setBreed("");
                }}
                // Event: element that was previously selected loses focus
                onBlur={(event) => {
                    setAnimal(event.target.value);
                    setBreed("");
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
                value={breed}
                onChange={(event) => setBreed(event.target.value)}
                onBlur={(event) => setBreed(event.target.value)}
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