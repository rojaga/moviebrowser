import Hero from "./hero";

const AboutView = () => {
    return (
        <>
            <main>
                <Hero text="About us"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque nostrum in odit nesciunt quaerat, suscipit adipisci repudiandae dolor illum velit ad quis accusamus, architecto cupiditate. A accusantium nostrum excepturi!
                            </p>
                        </div>
                    </div>

                </div>
            </main>
            
        </>    
    );
}

export default AboutView;