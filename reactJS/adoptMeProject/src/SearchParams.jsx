import { useState } from "react";

const SearchParams = () => {
    const [location, updateLocation] = useState("");
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input 
                onChange={(e) => updateLocation(e.target.value)}
                id="location" 
                value={location} 
                placeholder="Location" 
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;