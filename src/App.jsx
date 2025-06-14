import { Fragment, useState } from "react";
import SideBar from "./components/Sidebar.jsx";
import Newproject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const id = prevState.projects.length + 1;
      const newProject = {
        ...projectData,
        id: id,
      };
      return {
        ...prevState,
        selectedProjectId: id,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function onProjectSelected(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <Newproject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartedProject={handleStartProject} />;
  } else {
    content = (
      <SelectedProject
        project={projectsState.projects[projectsState.selectedProjectId - 1]}
      />
    );
  }
  return (
    <Fragment>
      <main className='h-screen  flex gap-8 '>
        <SideBar
          onStartedProject={handleStartProject}
          projects={projectsState.projects}
          handleSelectedProject={onProjectSelected}
        />
        {content}
      </main>
    </Fragment>
  );
}

export default App;
