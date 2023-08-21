import React from "react";

function About() {
    return (
        <div>
            <main>
                <img className="about-me-pic" src={process.env.PUBLIC_URL + "/images/IMG_2468.jpg"} alt="Headshot photograph of Corbin Cutter"/>
                
                <p className="about-me-p">Hello user! My name is Corbin Cutter. I am an aspiring full-stack web developer/ software engineer.
                I am proficient in front-end and back-end web development languages. One of my future goals is to master many more computer languages that will
                enable me to do much more!</p>

                <p className="tech-stack-p">Tech Stack</p>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>

            </main>
        </div>
    );
};

export default About