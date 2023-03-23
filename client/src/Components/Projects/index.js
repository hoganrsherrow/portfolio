import React from 'react';
import { AiProjects,
    MernProjects,
    BackendProjects,
    FrontendProjects
} from './assets';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects">
            <h3>Projects</h3>
            <hr />
            <div id="ai-projects" className='project-container'>
                <h4>AI</h4>
                <div className='flex'>
                    {AiProjects.map((i) => {
                        return (
                            <ProjectCard name={i.name} url={i.url} image={i.image} key={`ai-${i}`} />
                        );
                    })}
                </div>
            </div>
            <div id="mern-projects" className='project-container'>
                <h4>MERN</h4>
                <div className='flex'>
                    {MernProjects.map((i) => {
                        return (
                            <ProjectCard name={i.name} url={i.url} image={i.image} key={`mern-${i}`} />
                        );
                    })}
                </div>
            </div>
            <div id="backend-projects" className='project-container'>
                <h4>Backend</h4>
                <div className='flex'>
                    {BackendProjects.map((i) => {
                        return (
                            <ProjectCard name={i.name} url={i.url} image={i.image} key={`backend-${i}`} />
                        );
                    })}
                </div>
            </div>
            <div id="frontend-projects" className='project-container'>
                <h4>Frontend</h4>
                <div className='flex'>
                    {FrontendProjects.map((i) => {
                        return (
                            <ProjectCard name={i.name} url={i.url} image={i.image} key={`frontend-${i}`} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;