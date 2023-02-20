import data from "./projects.json";

export const fetchProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = fetchProjects();
  res.json(projects);
};
