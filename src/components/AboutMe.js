import React from 'react';

class AboutMe extends React.Component {
    render() {
        const aboutMe = this.props.aboutMe;

        return (
            <article className="page-about" id="about">
            <section>
                <h3>About Me</h3>
                <div>
                    <p className="about-me-text">{aboutMe.text}
                    </p>
                </div>
            </section>
        </article>
        );
    };
};

export default AboutMe;
