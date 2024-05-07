/**
 * NOTE: This is the old way of doing things. Functional components are the new norm, but this is good
 * for knowing in case you run into legacy code.
 */

import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
    }

    // This sets the default value for what props are within the scope of your class component
    // So if this.props is never set to anything, it provides the default value for the props
    // used in this class component
    // In this case, we're using `images` as props to map through in the `return()` statement
    // so we'd name it `images` here with the expected value(s) of what the prop should have in
    // this class component
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none/jpg"],
    };

    /**
     * Lifecycle methods
     */
    // Whatever is rendered within this scope only renders once when the component loads, and never again
    componentDidMount() {
    }

    // If you want to re-render the component after something updates
    componentDidUpdate() {
    }

    // And there's plenty more other lifecycle methods to conditionally do something with your class component!

    // All class components MUST have a `render()` function, period.
    render() {
        // NOTE: States are mutable in class components!
        // `this.state` is how we keep track of states, and anything we want to keep track of states for should be in the `state` variable on line 9
        // state = {
        //   active: 0,    
        // }
        const {active} = this.state;

        // This is accessed through the props that are passed into the component where it's rendered
        // return (
        //     <div className="details">
        //         <Carousel images={pet.images} />  <-- pet.images are the props passed into this component
        // and we name it `images` to store the images passed in from `pet.images`
        // NOTE: Props are immutable; cannot be reassigned to say `this.props = whatever`
        const {images} = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => {
                        <img
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;