import React from 'react';
import './service-card.css';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleConfigure = () => {
        navigate(`/client/params/${project}`);
    }

    const handleDetails = () => {
        navigate(`/client/services/${project}`)
    }

    console.log(project)
    return (
        <div className='project-card'>
            <span className='project-title'>{project.replace("_", " ").toUpperCase()}</span>
            <div className='project-controls'>
                <div className='control-btn'>Start</div>
                <div className='control-btn'>Restart</div>
                <div className='control-btn'>View Logs</div>
                <div onClick={handleDetails} className='control-btn'>Details</div>
                <div onClick={handleConfigure} className='control-btn'>Configure</div>
            </div>
        </div>
    )
}


export default ProjectCard