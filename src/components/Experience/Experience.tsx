/*import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Cyber Police Station",
      period: "Jan 2025 - Present",
      positions: [
        {
          title: "Cyber Security Intern",
          period: "Current",
          achievements: [
            "Assisted in handling and documenting cybercrime complaints, including online fraud, phishing, and social media offenses.",
            "Maintained and analyzed cyber complaint registers to support investigation and case tracking.",
            "Supported preliminary cyber investigations by reviewing digital evidence and identifying fraud patterns.",
            "Gained practical exposure to cyber laws, cyber forensics basics, and real-world incident response procedures."
          ]
        }
      ]
    },
    {
      company: "Orinson Technologies Pvt. Ltd.",
      period: "Dec 2024 - Jan 2025",
      positions: [
        {
          title: "Web Development Intern",
          period: "Dec 2024 - Jan 2025",
          achievements: [
            "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frontend practices to ensure smooth performance across multiple devices and screen sizes.",
            "Worked on full-stack web applications by integrating frontend interfaces with backend logic, enabling dynamic data handling and interactive user experiences.",
            "Implemented features such as forms, validations, and basic authentication to support real-world client requirements.",
            "Optimized website performance and improved page load times by refining code structure and assets."
          ]
        }
      ]
    },
    {
      company: "Pune StartUp Fest",
      period: "Dec 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Dec 2025 - Present",
          achievements: [
            "Selected as Campus Ambassador for Pune Startup Fest organized by COEP Technological University, Pune.",
            "Represented my college as a Campus Ambassador at Pune Startup Fest, COEP Technological University, Pune.",
            "Promoted Pune Startup Fest initiatives and student participation as a Campus Ambassador."
          ]
        }
      ]
    },
    {
      company: "Unstop",
      period: "Nov 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Nov 2025 - Present",
          achievements: [
            "Worked as a Campus Ambassador at Unstop, promoting competitions, internships, and career opportunities among students.",
            "Represented Unstop as a Campus Ambassador and increased student engagement on the platform."
          ]
        }
      ]
    },
    {
      company: "NTT Data, Inc.",
      period: "Sep 2025 - Present",
      positions: [
        {
          title: "Full Stack Development Trainee",
          period: "Sep 2025 - Present",
          achievements: [
            "Trained in full stack development concepts including HTML, CSS, JavaScript, and backend fundamentals at NTT DATA.",
            "Developed and tested basic full stack applications during training at NTT DATA."
          ]
        }
      ]
    },
    {
      company: "ITESA DYPCOE",
      period: "Oct 2024 - Present",
      positions: [
        {
          title: "Design Lead",
          period: "Aug 2025 - Present",
          achievements: [
            "Worked as Design Lead at ITESA, DYPCOE, leading creative design for technical and cultural events.",
            "Led a team of 9 members as Design Lead at ITESA, DYPCOE, planning, coordinating, and delivering creative designs for multiple technical and cultural events."
          ]
        },
        {
          title: "Member",
          period: "Oct 2024 - Aug 2025",
          achievements: [
            "Worked as an active member of ITESA, DYPCOE, contributing to the planning and execution of technical and cultural events."
          ]
        }
      ]
    },
    {
      company: "IASC DYPCOE",
      period: "Jul 2025 - Present",
      positions: [
        {
          title: "Design Lead",
          period: "Jul 2025 - Present",
          achievements: [
            "Worked as Design Lead at IASC, DYPCOE, leading and coordinating a team of four members to create posters, banners, and digital creatives for various events.",
            "Led a four-member design team at IASC DYPCOE, managing end-to-end design tasks and ensuring timely and high-quality delivery."
          ]
        }
      ]
    },
    {
      company: "InternsElite",
      period: "Mar 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Mar 2025 - Present",
          achievements: [
            "Worked as a Campus Ambassador at InternElite, promoting internship opportunities and increasing student participation on the platform."
          ]
        }
      ]
    },
    {
      company: "NSS DYPCOE",
      period: "Jul 2024 - Present",
      positions: [
        {
          title: "Design Coordinator",
          period: "Jan 2025 - Present",
          achievements: [
            "Worked as Design Coordinator at NSS DYPCOE, creating and managing design content for social awareness and community service activities.",
            "Coordinated and designed posters, banners, and digital creatives for NSS events and campaigns at DYPCOE."
          ]
        },
        {
          title: "Member",
          period: "Jul 2024 - Jan 2025",
          achievements: [
            "Served as a member, supporting organizational tasks and collaborative work.",
            "Actively participated as a member in planning and coordination activities."
          ]
        }
      ]
    },
    {
      company: "Internshala",
      period: "Oct 2024 - Oct 2025",
      positions: [
        {
          title: "Student Partner",
          period: "Oct 2024 - Oct 2025",
          achievements: [
            "Worked as a Student Partner at Internshala, promoting internships, trainings, and career opportunities among college students.",
            "Represented Internshala as a Student Partner by increasing awareness and student participation on the platform."
          ]
        }
      ]
    },
    {
      company: "Rotract Club of DYPCOE",
      period: "Jul 2025 - Sep 2025",
      positions: [
        {
          title: "Associate Club Service Director",
          period: "Jul 2025 - Sep 2025",
          achievements: [
            "As Associate Club Service Director at Rotaract Club of DYPCOE, assisted in planning and executing club meetings and service initiatives.",
            "Contributed to smooth functioning of the Rotaract Club of DYPCOE by coordinating internal activities as Associate Club Service Director."
          ]
        }
      ]
    },
    {
      company: "The Developers Arena",
      period: "Feb 2025 - Aug 2025",
      positions: [
        {
          title: "Full Stack Java Developer Intern",
          period: "Feb 2025 - Aug 2025",
          achievements: [
            "Contributed as a Full Stack Java Developer Intern at The Developers Arena by building, testing, and deploying scalable web solutions.",
            "Gained hands-on experience in front-end and back-end development as a Full Stack Java Developer Intern at The Developers Arena.",
            "Worked as a Full Stack Java Developer Intern at The Developers Arena, developing and maintaining end-to-end web applications using Java, HTML, CSS, and JavaScript."
          ]
        }
      ]
    },
    {
      company: "Eduskills Foundation",
      period: "Jan 2025 - Mar 2025",
      positions: [
        {
          title: "Python Full Stack Developer Virtual Intern",
          period: "Jan 2025 - Mar 2025",
          achievements: [
            "Contributed as a Python Full Stack Developer Virtual Intern at Eduskills Foundation by developing functional front-end and back-end features for projects.",
            "Enhanced practical knowledge of full stack development through real-world projects as a Python Full Stack Developer Virtual Intern at Eduskills Foundation."
          ]
        }
      ]
    },
    {
      company: "Magazine Team DYPCOE (IT Department)",
      period: "Aug 2024 - Dec 2024",
      positions: [
        {
          title: "Content Collection Member",
          period: "Aug 2024 - Dec 2024",
          achievements: [
            "Supported the Magazine Team at DYPCOE IT Department by collecting, verifying, and managing content as a team member.",
            "Contributed as a Content Collection Team Member at DYPCOE IT Department Magazine Team by collecting and coordinating content for newsletters and magazines."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="company-period">{exp.period}</span>
                </div>
              </div>
              <section id="experience" className="section">
  <div className="container">
    <h2>Professional Experience</h2>

    {/* SCROLLING CONTAINER 
    <div className="experience-timeline">
      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="experience-item">
          {/* content 
        </div>
      ))}
    </div>

  </div>
</section>


              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="position-item">
                  <div className="position-header">
                    <h4 className="position-title">{position.title}</h4>
                    <span className="position-period">{position.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {position.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;*/ 



import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Cyber Police Station",
      period: "Jan 2025 - Present",
      positions: [
        {
          title: "Cyber Security Intern",
          period: "Current",
          achievements: [
            "Assisted in handling and documenting cybercrime complaints, including online fraud, phishing, and social media offenses.",
            "Maintained and analyzed cyber complaint registers to support investigation and case tracking.",
            "Supported preliminary cyber investigations by reviewing digital evidence and identifying fraud patterns.",
            "Gained practical exposure to cyber laws, cyber forensics basics, and real-world incident response procedures."
          ]
        }
      ]
    },
    {
      company: "Orinson Technologies Pvt. Ltd.",
      period: "Dec 2024 - Jan 2025",
      positions: [
        {
          title: "Web Development Intern",
          period: "Dec 2024 - Jan 2025",
          achievements: [
            "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frontend practices to ensure smooth performance across multiple devices and screen sizes.",
            "Worked on full-stack web applications by integrating frontend interfaces with backend logic, enabling dynamic data handling and interactive user experiences.",
            "Implemented features such as forms, validations, and basic authentication to support real-world client requirements.",
            "Optimized website performance and improved page load times by refining code structure and assets."
          ]
        }
      ]
    },
    {
      company: "Pune StartUp Fest",
      period: "Dec 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Dec 2025 - Present",
          achievements: [
            "Selected as Campus Ambassador for Pune Startup Fest organized by COEP Technological University, Pune.",
            "Represented my college as a Campus Ambassador at Pune Startup Fest, COEP Technological University, Pune.",
            "Promoted Pune Startup Fest initiatives and student participation as a Campus Ambassador."
          ]
        }
      ]
    },
    {
      company: "Unstop",
      period: "Nov 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Nov 2025 - Present",
          achievements: [
            "Worked as a Campus Ambassador at Unstop, promoting competitions, internships, and career opportunities among students.",
            "Represented Unstop as a Campus Ambassador and increased student engagement on the platform."
          ]
        }
      ]
    },
    {
      company: "NTT Data, Inc.",
      period: "Sep 2025 - Present",
      positions: [
        {
          title: "Full Stack Development Trainee",
          period: "Sep 2025 - Present",
          achievements: [
            "Trained in full stack development concepts including HTML, CSS, JavaScript, and backend fundamentals at NTT DATA.",
            "Developed and tested basic full stack applications during training at NTT DATA."
          ]
        }
      ]
    },
      {
      company: "ITESA DYPCOE",
      period: "Oct 2024 - Present",
      positions: [
        {
          title: "Design Lead",
          period: "Aug 2025 - Present",
          achievements: [
            "Worked as Design Lead at ITESA, DYPCOE, leading creative design for technical and cultural events.",
            "Led a team of 9 members as Design Lead at ITESA, DYPCOE, planning, coordinating, and delivering creative designs for multiple technical and cultural events."
          ]
        },
        {
          title: "Member",
          period: "Oct 2024 - Aug 2025",
          achievements: [
            "Worked as an active member of ITESA, DYPCOE, contributing to the planning and execution of technical and cultural events."
          ]
        }
      ]
    },
    {
      company: "IASC DYPCOE",
      period: "Jul 2025 - Present",
      positions: [
        {
          title: "Design Lead",
          period: "Jul 2025 - Present",
          achievements: [
            "Worked as Design Lead at IASC, DYPCOE, leading and coordinating a team of four members to create posters, banners, and digital creatives for various events.",
            "Led a four-member design team at IASC DYPCOE, managing end-to-end design tasks and ensuring timely and high-quality delivery."
          ]
        }
      ]
    },
    {
      company: "InternsElite",
      period: "Mar 2025 - Present",
      positions: [
        {
          title: "Campus Ambassador",
          period: "Mar 2025 - Present",
          achievements: [
            "Worked as a Campus Ambassador at InternElite, promoting internship opportunities and increasing student participation on the platform."
          ]
        }
      ]
    },
    {
      company: "NSS DYPCOE",
      period: "Jul 2024 - Present",
      positions: [
        {
          title: "Design Coordinator",
          period: "Jan 2025 - Present",
          achievements: [
            "Worked as Design Coordinator at NSS DYPCOE, creating and managing design content for social awareness and community service activities.",
            "Coordinated and designed posters, banners, and digital creatives for NSS events and campaigns at DYPCOE."
          ]
        },
        {
          title: "Member",
          period: "Jul 2024 - Jan 2025",
          achievements: [
            "Served as a member, supporting organizational tasks and collaborative work.",
            "Actively participated as a member in planning and coordination activities."
          ]
        }
      ]
    },
    {
      company: "Internshala",
      period: "Oct 2024 - Oct 2025",
      positions: [
        {
          title: "Student Partner",
          period: "Oct 2024 - Oct 2025",
          achievements: [
            "Worked as a Student Partner at Internshala, promoting internships, trainings, and career opportunities among college students.",
            "Represented Internshala as a Student Partner by increasing awareness and student participation on the platform."
          ]
        }
      ]
    },
    {
      company: "Rotract Club of DYPCOE",
      period: "Jul 2025 - Sep 2025",
      positions: [
        {
          title: "Associate Club Service Director",
          period: "Jul 2025 - Sep 2025",
          achievements: [
            "As Associate Club Service Director at Rotaract Club of DYPCOE, assisted in planning and executing club meetings and service initiatives.",
            "Contributed to smooth functioning of the Rotaract Club of DYPCOE by coordinating internal activities as Associate Club Service Director."
          ]
        }
      ]
    },
    {
      company: "The Developers Arena",
      period: "Feb 2025 - Aug 2025",
      positions: [
        {
          title: "Full Stack Java Developer Intern",
          period: "Feb 2025 - Aug 2025",
          achievements: [
            "Contributed as a Full Stack Java Developer Intern at The Developers Arena by building, testing, and deploying scalable web solutions.",
            "Gained hands-on experience in front-end and back-end development as a Full Stack Java Developer Intern at The Developers Arena.",
            "Worked as a Full Stack Java Developer Intern at The Developers Arena, developing and maintaining end-to-end web applications using Java, HTML, CSS, and JavaScript."
          ]
        }
      ]
    },
    {
      company: "Eduskills Foundation",
      period: "Jan 2025 - Mar 2025",
      positions: [
        {
          title: "Python Full Stack Developer Virtual Intern",
          period: "Jan 2025 - Mar 2025",
          achievements: [
            "Contributed as a Python Full Stack Developer Virtual Intern at Eduskills Foundation by developing functional front-end and back-end features for projects.",
            "Enhanced practical knowledge of full stack development through real-world projects as a Python Full Stack Developer Virtual Intern at Eduskills Foundation."
          ]
        }
      ]
    },
    {
      company: "Magazine Team DYPCOE (IT Department)",
      period: "Aug 2024 - Dec 2024",
      positions: [
        {
          title: "Content Collection Member",
          period: "Aug 2024 - Dec 2024",
          achievements: [
            "Supported the Magazine Team at DYPCOE IT Department by collecting, verifying, and managing content as a team member.",
            "Contributed as a Content Collection Team Member at DYPCOE IT Department Magazine Team by collecting and coordinating content for newsletters and magazines."
          ]
        }
      ]
    }
    // remaining experiences unchanged

  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Professional Experience</h2>

        {/* SCROLLING CONTAINER */}
        <div className="experience-timeline">
          <div className="experience-scroll">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="company-period">{exp.period}</span>
                </div>
              </div>

              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="position-item">
                  <div className="position-header">
                    <h4 className="position-title">{position.title}</h4>
                    <span className="position-period">{position.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {position.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



