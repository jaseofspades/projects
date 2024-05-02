import Pet from "./Pet";

/**
 * Takes `pets` prop from the argument and renders the results of the searched pets
 * @param {*} pets 
 * @returns 
 */
const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets found</h1>
            ) : (
                pets.map((pet) => {
                    // You generally have two options when mapping over props to feed into a component
                    // Option 1: Spread operator
                    // - Under the hood, the `Pet` component will take `{...pet}` and auto-map the props
                    //   i.e. in <Pet/>, animal={pet.animal}, breed={pet.breed}, etc.
                    // - However, this makes it not as easy to read or understand where the props are coming from
                    // <Pet
                    //     {...pet}
                    //     key={pet.id}
                    // />

                    /**
                     * NOTE: A good time to use spread operator is if you're passing in props from one component into another,
                     * and the receiving component doesn't need to know what's in the props or use them other than passing it forward.
                     */

                    // Option 2: Explicitly pass in prop parameters
                    // This is the cleaner way to do it, even if it's a bit more verbose
                    // Also don't forget to return the component!
                    return (
                        <Pet
                            animal={pet.animal}
                            name={pet.name}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            key={pet.id}
                            id={pet.id}
                        />
                    );
                })
            )}
        </div>
    );
};

export default Results;