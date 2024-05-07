/**
 * NOTE: This is the old way of doing things. Functional components are the new norm, but this is good
 * for knowing in case you run into legacy code.
 */

import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
        name: "luna"
    };

    // This sets the default value for what props are within the scope of your class component
    // So if this.props is never set to anything, it provides the default value for the props
    // used in this class component
    // In this case, we're using `images` as props to map through in the `return()` statement
    // so we'd name it `images` here with the expected value(s) of what the prop should have in
    // this class component
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none/jpg"],
    };

    // Event handling in Class components
    // - An image is clicked on, which is the event
    // - Calls this function `handleIndexClick()`
    // - Which then calls `this.setState()` to update the state of 
    //   a property that's being tracked for state change under the `state` object
    handleIndexClick = (event) => {
        this.setState({
            // event = the click on an image
            // target = the image that was clicked on
            // dataset = refers to all `data-___` items on a given object, which is `data-index={index}` in this case
            // index = a String (because all items off the DOM are strings) value
            // + = unary operator that coerces a string to a number
            active: +event.target.dataset.index
        });
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
                            onClick={this.handleIndexClick} // Event handling in Class Components example
                            data-index={index}
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

/**
 * Recall that you cannot use hooks, useQuery, or anything that can be used in function components within a class component.
 * But if you wanted to use functional components within the context of class components, here's how you might do it:
 * 
 * You can create a small functional component and passes it down to the Carousel child component.
 */
// function CarouselParent ({animal}) {
//     const [breedList] = useBreedList(animal);

//     return <Carousel breedList={breedList} />
// }

// export default CarouselParent;