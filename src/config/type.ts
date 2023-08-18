interface Base {
  name: string;
  eng: string;
  gender: string;
  age: number;
}

interface Connection {
  github: string;
  blog: string;
  email: string;
}

interface Education {
  school: string;
  start: string;
  end: string;
  major: string;
  degree: string;
}

interface Project {
  name: string;
  desc: string;
  link: string;
}

interface Experience {
  name: string;
  start: string;
  end: string;
  company: string;
  content: string;
}

interface Award {
  time: string;
  name: string;
}

export interface Config {
  resumeTitle: string;
  base: Base;
  desc: string;
  connection: Connection;
  educations: Education[];
  projects: Project[];
  experiences: Experience[];
  awards: Award[];
}
