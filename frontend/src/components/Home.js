import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [showText2, setShowText2] = useState(false);

    const toggleText2 = () => {
        setShowText2(!showText2);
    };

    return (
        <div>
            <button className="cta-button">GET FREE CONSULTATION</button>
            <div className="dashed-line-rectangle">
                <p className="rectangle-text" onClick={toggleText2}>
                    What is Webflow and why is it the best website builder ?
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="toggle-button">+</span>

                </p>
                {showText2 && (
                    <div className="text2">
                        <p>
                            What is Webflow and why is it the best website builder ?
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="toggle-button" onClick={toggleText2}>-</span>
                        </p>
                        <p className="paragraph">Vitae congue eu consequat ac falis placerat vestibulum lectus mauris ultrices</p>
                        <p className="paragraph">Cursus sit amet dictum sit amet justo donec enim diam porttior lacus luctus</p>
                        <p className="paragraph">accumsan tortor posuere</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
