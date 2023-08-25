import React from "react";

function About() {
    return (
        <div>
            <main>
                <img className="about-me-pic" src={process.env.PUBLIC_URL + "/images/IMG_2468.jpg"} alt="Headshot photograph of Corbin Cutter"/>
                
                <p className="about-me-p">Hello user! My name is Corbin Cutter. 
                I am an aspiring full-stack web developer/ software engineer.
                I am proficient in front-end and back-end coding languages. 
                One of my future goals is to master many more computer languages that will enable me to do much more! 
                Growing up, I was always into team sports. 
                Such as, Soccer and Baseketball. 
                More recently, I have grown to enjoy Baseball. 
                I just absolutely LOVE the camaraderie between my teams and I. 
                I'll add that I firmly believe a team is far more strong and reliable than any single human. 
                Multiple people striving to achieve a common goal will perform substantially greater than one man. 
                So, working with a team is one of my many strengths!
                My passion for computer engineering is bright and I aim to channel that energy into my career as a developer.</p>

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