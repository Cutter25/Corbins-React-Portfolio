import React from "react";

function Resume() {
    return (
        <div>
            <main>
                <a className="resume-link" href={process.env.PUBLIC_URL + "https://docs.google.com/document/d/1jc8ukTFXlIsUHldLoWm-ilB4u0HCB3gSfUIwGmCsagw/edit?usp=sharing"} target="_blank" rel="noreferrer"
                >Click here to view my Resume!</a>
            </main>
        </div>
    );
};

export default Resume