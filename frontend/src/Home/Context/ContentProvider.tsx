import React, { PropsWithChildren, useEffect, useState } from 'react';
import useBaseUrl from '../Hooks/useBaseUrl';

interface Content {
  projects: Project[];
}

type Project = {
  id: string;
  desc: string;
  image: string;
  link: string;
  icon1: string;
  icon2: string;
  icon3: string;
  type: string;
  featured: boolean;
};

const ContentContext = React.createContext<Content>({
  projects: [],
});

export function useContentContext() {
  return React.useContext(ContentContext);
}

const ContentProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const baseUrl = useBaseUrl();
  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchProjects() {
    try {
      const data = await (await fetch(`${baseUrl}/projects`)).json();
      if (data.success) {
        console.log(data);
        setProjects(data.data.projects);
      }
      console.log(data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const value: Content = {
    projects,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
