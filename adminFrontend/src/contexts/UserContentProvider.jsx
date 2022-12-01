import React, { createContext, useContext, useReducer } from 'react';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import useBaseUrl from '../hooks/useBaseUrl';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { useAuthContext } from './AuthProvider';

const UserContentContext = createContext();

const projectsReducer = (state, action) => {
  if (action.type === 'POPULATE') {
    return [...action.payload];
  } else if (action.type === 'ADD') {
    return [...state, action.payload];
  } else if (action.type === 'UPDATE_PROJECT') {
    return state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...action.payload };
      }
      return item;
    });
  } else if (action.type === 'DELETE_PROJECT') {
    return state.filter((item) => item.id !== action.payload);
  }

  throw new Error('Action type for projects does not match any defined type');
};

export function useUserContentContext() {
  return useContext(UserContentContext);
}

function UserContentProvider({ children }) {
  const [projects, projectDispatch] = useReducer(projectsReducer, []);
  const [statusMessage, setStatusMessage] = useSessionStorage("STATUS_MESSAGE", {
    status: '',
    message: '',
  });

  const [openModal, setOpenModal] = useSessionStorage("OPEN_MODAL",{
    open: false,
    mode: null,
  });
  const [currentProject, setCurrentProject] = useSessionStorage("CURRENT_PROJECT", {});

  const { baseUrl } = useBaseUrl();
  const { fileServerBase } = useBaseUrl();

  const { token } = useAuthContext();

  async function fetchProjects() {
    const data = await (await fetch(baseUrl + 'content/projects')).json();
    if (data.success) {
      projectDispatch({ type: 'POPULATE', payload: data.data.projects });
    }
  }
  function includeProjectToList(project) {
    projectDispatch({ type: 'ADD', payload: project });
  }
  function updateProjectInList(project) {
    projectDispatch({ type: 'UPDATE_PROJECT', payload: project });
  }
  function deleteProjectFromList(id) {
    projectDispatch({ type: 'DELETE_PROJECT', payload: id });
  }

  async function addProject(
    id,
    name,
    desc,
    image,
    link,
    icon1,
    icon2,
    icon3,
    type,
    featured
  ) {
    try {
      const newProject = await (
        await fetch(baseUrl + 'content/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            id,
            name,
            desc,
            image,
            link,
            icon1,
            icon2,
            icon3,
            type,
            featured,
          }),
        })
      ).json();
      return newProject;
    } catch (err) {
      return { success: false, message: 'Something went wrong! Try again' };
    }
  }

  async function updateProject(
    id,
    name,
    desc,
    image,
    link,
    icon1,
    icon2,
    icon3,
    type,
    featured
  ) {
    try {
      const response = await (
        await fetch(`${baseUrl}content/projects/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            id,
            name,
            desc,
            image,
            link,
            icon1,
            icon2,
            icon3,
            type,
            featured,
          }),
        })
      ).json();
      return response;
    } catch (err) {
      return { success: false, message: "Couldn't update project. Try again" };
    }
  }

  async function deleteProject(id) {
    try {
      const data = await (
        await fetch(`${baseUrl}content/projects/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
      ).json();
      return data;
    } catch (err) {
      return { success: false, message: "Couldn't delete project. Try again" };
    }
  }

  async function uploadToCdn(file, projectId) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('projectId', projectId);
    try {
      const response = await (
        await fetch(`${fileServerBase}`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
      ).json();
      return response;
    } catch (err) {
      return { success: false, message: "Couldn't upload to cdn" };
    }
  }

  async function deleteFromCdn(url) {
    const response = await (
      await fetch(fileServerBase, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ url }),
      })
    ).json();
    return response;
  }

  async function updateImageUrl(id, url) {
    const data = await (
      await fetch(`${baseUrl}content/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          coverImage: url,
        }),
      })
    ).json();
    return data;
  }

  useEffect(() => {
    if (token) {
      fetchProjects();
    }
  }, [token]);

  return (
    <UserContentContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        reloadProjects: fetchProjects,
        openModal,
        setOpenModal,
        setCurrentProject,
        currentProject,
        statusMessage,
        setStatusMessage,
        uploadToCdn,
        deleteFromCdn,
        updateImageUrl,
        includeProjectToList,
        updateProjectInList,
        deleteProjectFromList,
      }}
    >
      {children}
    </UserContentContext.Provider>
  );
}

export default UserContentProvider;
