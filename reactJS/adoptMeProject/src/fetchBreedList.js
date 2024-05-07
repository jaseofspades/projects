/**
 * This is a method that we're creating to use it with React Query for fetching breed data!
 * 
 * Also note that this is an independent method that can be tested separately from other code
 *  and re-used elsewhere if needed
 */
const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];

    if (!animal) {
        return [];
    }

    const apiResult = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    // React Query will provide an error if the querying failed
    if (!apiResult.ok) {
        throw new Error(`breeds/${animal} fetch was not OK.`);
    }

    // Don't forget to return if there's an async promise that's made
    // NOTE: You could write `return await apiResult.json()` here, but that technically takes
    //      an additionnal millisecond to fulfill an async promise and is ultimately unnecessary
    //      to do the same return here.
    return apiResult.json();
}


export default fetchBreedList;