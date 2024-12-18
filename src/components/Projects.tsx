
function Projects() {


    const projects = [
        {
          title: 'Front-End Quiz App',
          description: 'A brief description of Project One. It showcases my skills in front-end development using React.',
          image: '/project-1.png',
          link: 'https://example.com/project-one',
        },
        {
          title: 'My Portfolio',
          description: 'A brief description of Project Two. This project is built with Flutter for mobile platforms.',
          image: '/project-2.png',
          link: 'https://example.com/project-two',
        },
        {
          title: 'Project Three',
          description: 'A brief description of Project Three. This project focuses on responsive design and user experience.',
          image: '/path/to/project-three-image.jpg',
          link: 'https://example.com/project-three',
        },
        // Add more projects as needed
      ];
  return (
    <div>
        <section className="py-10 px-5 md:px-10 lg:px-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg hover:drop-shadow-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-700">{project.description}</p>
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
        ))}
      </div>
    </section>
      
    </div>
  )
}

export default Projects
