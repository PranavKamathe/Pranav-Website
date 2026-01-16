import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am Pranav Kamathe, a passionate and results-driven Software Development Engineer with 
              extensive experience in designing and implementing robust, scalable, and efficient software solutions. 
              Currently based in Pune, India, I thrive on solving complex challenges and delivering 
              impactful technology to enhance user experiences and operational excellence.
            </p>
            <p>
              At the Cyber Police Station, I played a crucial role as a Cyber Security Intern in handling cybercrime complaints, 
              maintaining digital records, and assisting in preliminary investigations. My responsibilities included analyzing 
              fraud cases, managing complaint registers, and supporting officers with cyber incident documentation, 
              significantly improving case handling efficiency. 
            </p>
            <p>
              Previously, as a Web Development Intern at Orinson Technologies Pvt. Ltd., I contributed to building
              responsive and full-stack web applications by developing dynamic user interfaces 
              and backend integrations, improving usability, scalability, and performance 
              for client-focused solutions.
            </p>
            <p>
              With a strong foundation in Data Structures, System Design, and Full-Stack Development, I am proficient 
              in technologies such as HTML/CSS,JavaScript, MongoDB, Express.js, React.js, Node.js, etc. My work consistently reflects 
              my dedication to crafting seamless, scalable solutions that align with business goals.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label1"> Months Experience </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label1"> Working Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label1"> Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">90%</div>
              <div className="stat-label1"> Efficiency Improvement </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;