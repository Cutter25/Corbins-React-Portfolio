import React from "react";

function Work() {
    return (
        <div>
            <main>
                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/NoteTakerScreenshot.png"} alt="Corbin's note taker web application" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbins-Note-Taker"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://corbins-note-taker.herokuapp.com/"><p> Note Taker </p></a>
                </div>

                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/EmployeeTracker.png"} alt="Corbin's employee tracker web application" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbins-Employee-Tracker"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://drive.google.com/file/d/1DmJyzYVVCUyGDjFe7kJyXB3CtedcuKn0/view?usp=sharing"><p> Employee Tracker </p></a>
                </div>

                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/SocNetAPI.png"} alt="Corbin's social network API" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbins-Social-Network-API"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://drive.google.com/file/d/1sFnKCHl5UJifselRkt0uQWaWrHUSGiU2/view?usp=sharing"><p> Social Network API </p></a>
                </div>

                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/WeeklyPlanner.png"} alt="Corbin's weekly planner web application" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbins-weekly-planner"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://cutter25.github.io/Corbins-weekly-planner/"><p> Planner App </p></a>
                </div> 

                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/WeatherDashboard.png"} alt="Corbin's waether dashboard application" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbin-s-Weather-App"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://cutter25.github.io/Corbin-s-Weather-App/"><p> Weather Dash </p></a>
                </div>

                <div className="project-container">
                    <img className="project-img" src={process.env.PUBLIC_URL + "/images/CodeEditor.png"} alt="Corbin's code editor web application" />
                    <a className="project-github" href="https://github.com/Cutter25/Corbins-Code-Editor"> <img className="github-logo" 
                    src={process.env.PUBLIC_URL + "/images/Github2.png"} alt="Github Logo" />  </a>
                    <a className="project-live-site" href="https://corbins-code-editor.herokuapp.com/"><p> Code Editor </p></a>
                </div>
            </main>
        </div>
    );
};

export default Work;