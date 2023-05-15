import React from 'react';
import './project.css';

const Project = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: (
        <>
          <p><b>·</b> Portfolio designed for showcasing my information and skills of web development using React.js.</p>
          <p><b>·</b> This Web app is developed in combination of HTML, CSS, and JavaScript.</p>
          <p><b>·</b> Website: <a href="https://portfolio-maharaaj.netlify.app/">https://portfolio-maharaaj.netlify.app/</a></p>
        </>
      ),
      image: 'project1.jpg',
      isFirst: true,
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'project2.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'project3.jpg',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      image: 'project4.jpg',
    },
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div
          className="project-card"
          key={index}
          style={{
            paddingLeft: project.isFirst ? '20px' : '0', // Add padding to the left of the first card
          }}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Project;
