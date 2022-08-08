import Hero from "./hero";

const Home = () => {
    return (
        <>
            
                <Hero text="Welcome to BrowseFlix! "/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 my-5">
                            <p className="lead">
                                Browse a giagantic library of movies and view some basic details of the films you love. Or disvocer something new!
                            </p>
                        </div>
                    </div>

                </div>
            
        </>
    )
}

export default Home;