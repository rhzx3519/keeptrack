import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './ProjectList'
import { Project } from './Project'


export default function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
    };

  return (
    <div>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} onSave={saveProject}/>
    </div>
  )
}
