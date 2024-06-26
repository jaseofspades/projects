// `Link` allows for routing from one page to another without having to force
// a full re-render for the page you're navigating to!
import { Link } from 'react-router-dom';

const Pet = ({name, animal, breed, images, location, id}) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

    if (images.length) {
        hero = images[0];
    }

    return (
      // Instead of using the <a> anchor tag, we can now use the `Link` component
      // to capture the event change on the client-side and work a lot faster
      // <a href={`/details/${id}`} className="pet">
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
            <img src={hero} alt={name} />
        </div>
        <div className="info">
            <h1>{name}</h1>
            <h2>{animal} - {breed} - {location}</h2>
        </div>
      {/* </a> */}
      </Link>
    );
  };
  
  export default Pet;