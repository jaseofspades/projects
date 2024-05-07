// `useParams` allows you to access parameters in the URL through something called CONTEXT from parent component to its children
// WARNING: The parameter name has to be destructured with the same name as the parameter you're trying to access:
// ex: <Link to={`/details/${id}`} className="pet"> will need `const {id} = useParams();`
//
// This is possible because `useParams` assumes a `BrowserRouter` is available and it reaches into it to pull out a parameter
// by the name used in the `BrowserRouter`
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    return <h2> Hi! ID is {id}</h2>
};

export default Details;