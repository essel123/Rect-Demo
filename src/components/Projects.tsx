// Projects.tsx
function Projects() {
  const projects = [
    {
      title: "Front-End Quiz App",
      description: `Allow users to switch between dark and light mode. 
        Preserve users' preferences (settings) on the applications
        Avoid loss of data on a refresh of the browser while using the app`,
      image: "/project-1.png",
      link: "https://example.com/project-one"
    },
    {
      title: "My Portfolio",
      description: `Portfolio is a personal project designed to showcase a curated collection of my best work, highlighting my skills, expertise, and creative journey.`,
      image: "/project-2.png",
      link: "https://github.com/essel123/Rect-Demo.git"
    },
    {
      title: "Multi-step-form",
      description:
        "A multi-step form where users can jump stages, but not submit until all fields are filled. This is only possible by clicking on the stage name.",
      image: "/public/project-3.png",
      link: "https://github.com/essel123/Multi-Step-Form.git"
    }
    // Add more projects as needed
  ];

  return (
    <div>
      <section className="py-10 px-5 md:px-10 lg:px-10">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) =>
            <div
              key={index}
              className="bg-white rounded-lg hover:drop-shadow-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`Image of ${project.title}`} // Improve accessibility
                className="w-full h-48 object-cover"
                // Handle broken images
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-700 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects;
