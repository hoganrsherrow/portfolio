import React from 'react';

const ProjectCard = (props) => {
    const { name, url, image } = props;

    return (
        <div name={name} className='project-card'>
            <h5>{name}</h5>
            <a href={url} target="_blank" rel='noreferrer'><img src={image} alt={`${name} project`} /></a>
        </div>
    );
}

export default ProjectCard;