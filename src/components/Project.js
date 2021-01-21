import React from 'react';

class Project extends React.Component {
    render() {
        const project = this.props;

        return (
            <a href={project.link} target="_blank" rel="noreferrer">
                <section>
                    <p>
                        {project.text}
                    </p>
                    <figure>
                        <img src={project.image}
                            alt={project.name} 
                            width="70" 
                            className="page-main__image bShadow-33"
                        />
                    </figure>
                </section>
            </a>
        );
    };
};

export default Project;