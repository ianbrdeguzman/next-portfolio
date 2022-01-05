import React from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IAboutProps {
  text: {
    one: string;
    two: string;
  };
  education: string[];
  skills: {
    frontend: string[];
    backend: string[];
    styling: string[];
    others: string[];
  };
}

export interface IExperienceButtonProps {
  name: string;
  selected: string;
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export interface IExperienceCardProps {
  selected: string;
  name: string;
  role: string;
  city: string;
  country: string;
  fromDate: string;
  toDate: string;
  task: string[];
}

export interface IExperienceProps {
  name: string;
  role: string;
  city: string;
  country: string;
  fromDate: string;
  toDate: string;
  task: string[];
}

export interface IProjectProps {
  id: number;
  name: string;
  description: string;
  todos: string[];
  challenge: string;
  solution: string;
  technologies: string[];
  demo: string;
  repo: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

export interface IProjectCardProps extends IProjectProps {
  delay: string;
}

export interface IContactProps {
  text: string;
}

export interface IAppProps {
  about: IAboutProps;
  experience: IExperienceProps[];
  projects: IProjectProps[];
  contact: IContactProps;
}
