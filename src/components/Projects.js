import React from 'react';
import Project from '../components/Project';

class Projects extends React.Component {
    render() {
        const projects = this.props.projects;

        const mappedProjects = projects.map((project) => {
            return <Project 
                key={project.id}
                name={project.name}
                text={project.text}
                image={project.image}
                link={project.link}
            />;
        });

        return (
            <article className="page-projects" id="projects">
                <h3>Highlighted Projects</h3>
                <div className="projects-box">
                    {mappedProjects}
                </div>
            </article>
        );
    };
};

export default Projects;