import React, { useEffect, useState } from 'react'
import ProjectList from './ProjectList'
import { Project } from './Project'
import { projectAPI } from './projectAPI';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state";
import App from "../App";
import app from "../App";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import { AnyAction } from "redux";
import { loadProjects } from "./state/projectActions";


export default function ProjectsPage() {
    // const [projects, setProjects] = useState<Project[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | undefined>(undefined);

    // useSelector retrieve data from redux store like MySql select
    const loading = useSelector(
        (appState: AppState) => appState.projectState.loading
    );
    const projects = useSelector(
       (appState: AppState) => appState.projectState.projects
    );
    const error = useSelector(
       (appState: AppState) => appState.projectState.error
    );
    const currentPage = useSelector(
       (appState: AppState) => appState.projectState.page
    )
    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();


    // useEffect(() => {
    //     async function loadProjects() {
    //         setLoading(true);
    //         try {
    //             const data = await projectAPI.get(1);
    //             setError('');
    //             setProjects(data);
    //         } catch(e) {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     loadProjects();
    // }, []);

    useEffect(() => {
        dispatch(loadProjects(1));
    }, [dispatch]);

    const handleMoreClick = () => {
        dispatch(loadProjects(currentPage + 1));
    }

    // const saveProject = (project: Project) => {
    //     projectAPI
    //         .put(project)
    //         .then(updatedProject => {
    //             let updatedProjects = projects.map((p: Project) => {
    //                 return p.id === project.id ? new Project(updatedProject) : p;
    //             });
    //             setProjects(updatedProjects);
    //         })
    //         .catch(e => {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         });
    // };

  return (
    <div>
        <h1>Projects</h1>
        {error && (
            <div className='row'>
                <div className='card large error'>
                    <section>
                        <p>
                            <span className='icon-alert inverse'></span>
                            {error}
                        </p>
                    </section>
                </div>
            </div>
        )}
        {/*<ProjectList projects={projects} onSave={saveProject}/>*/}
        <ProjectList projects={projects} />
        {loading && (
            <div className='center-page'>
                <span className='spinner primary'></span>
                <p>Loading...</p>
            </div>
        )}
    </div>
  )
}
