import { useState } from "react";
import EditProject from "./EditProject";

const initialProjects = [
  {
    id: 1,
    name: "Dashboard Redesign",
    description: "Redesign admin dashboard UI admin dashboard UI admin dashboard UI admin dashboard UI admin dashboard UI",
    createdBy: "Andrew Mike",
    status: "Active",
    isDeleted: "No",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Customer mobile application",
    createdBy: "John Doe",
    status: "Inactive",
    isDeleted: "No",
  },
  {
    id: 3,
    name: "API Refactor",
    description: "Improve backend performance",
    createdBy: "Admin",
    status: "Inactive",
    isDeleted: "Yes",
  },
];

const ProjectList = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSave = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === updatedProject.id ? updatedProject : p
      )
    );
    setSelectedProject(null);
  };

  const truncateWords = (text, limit = 5) => {
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

  return (
    <div className="bg-BGWhite rounded-lg relative">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-TextGray">
            <th>Name</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Deleted</th>
            <th>Button</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b border-GrayBorder text-TextBlack last:border-none">
              <td className="py-2">{project.name}</td>
              <td>{truncateWords(project.description)}</td>
              <td>{project.createdBy}</td>
              <td>{project.status}</td>
              <td>{project.isDeleted}</td>
              <td>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Project Modal */}
      {selectedProject && (
        <EditProject
          project={selectedProject}
          onSave={handleSave}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectList;
