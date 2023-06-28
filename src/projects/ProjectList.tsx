import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };

    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    const items = projects.map(project => (
        <div className="cols-sm" key={project.id}>
            {project == projectBeingEdited ? (
                <ProjectForm onCancel={cancelEditing} project={project}/>
            ) : (
                <ProjectCard project={project} onEdit={handleEdit}/>
            )}
        </div>
    ));
    return <div className="row">{items}</div>
}

export default ProjectList;