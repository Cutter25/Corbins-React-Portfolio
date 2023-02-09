import React from "react";

function About() {
    return (
        <div>
            <main>
                <img className="about-me-pic" src={process.env.PUBLIC_URL + '/images/IMG_2468.jpg'} alt="Headshot photograph of Corbin Cutter"/>
                <p className="about-me-p">Hello user! My name is Corbin Cutter. I am an aspiring full-stack web developer/ software engineer.</p>
            </main>
        </div>
    );
};

export default About