/**
 * This is a method that we're creating to use it with React Query for fetching pet data!
 * 
 * Also note that this is an independent method that can be tested separately from other code
 *  and re-used elsewhere if needed
 */
const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiResult = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    // React Query will provide an error if the querying failed
    if (!apiResult.ok) {
        throw new Error(`details/${id} fetch was not OK.`);
    }

    // Don't forget to return if there's an async promise that's made
    // NOTE: You could write `return await apiResult.json()` here, but that technically takes
    //      an additionnal millisecond to fulfill an async promise and is ultimately unnecessary
    //      to do the same return here.
    return apiResult.json();
}


export default fetchPet;