import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className="text-center">Who are we?</h2>
            <div className="container">
                <p className="text-center py-3">Two students and one alumnus from The University of Washington in Seattle, Washington with varying fields of study withing computer science.
                    All with a love for coffee and a desire to streamline the coffee-drinking and coffee-making process.
                </p>
                <div className="container card-deck text-center" id="team">
                    <div className="card align-items-center" id="andre-card">
                        <h3 className="mt-1">Andre Huang</h3>
                        <img src="https://avatars1.githubusercontent.com/u/32121243?s=460&v=4" alt="andre" className="rounded-circle p-2" />
                        <p>Full-Stack Developer</p>
                    </div>
                    <div className="card align-items-center" id="aashray-card">
                        <h3 className="mt-1">Aashray Anand</h3>
                        <img src="https://avatars3.githubusercontent.com/u/9687909?s=460&v=4" alt="aashray" className="rounded-circle p-2" />
                        <p>Software Engineer</p>
                    </div>
                    <div className="card align-items-center" id="ozan-card">
                        <h3 className="mt-1">Ozan Erdal</h3>
                        <img src="https://avatars0.githubusercontent.com/u/7518143?s=460&v=4" alt="ozan" className="rounded-circle p-2" />
                        <p>Front-End Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;