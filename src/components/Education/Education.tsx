
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's of Information Technology",
      institution: "Dr. D.Y. Pratishthan's D.Y. Patil College of Engineering, Akurdi, Pune",
      location: "Pimpri-Chinchwad, Pune, Maharashtra, India",
      duration: "Aug 2023 – May 2027 (Expected)",
      gpa: "9.58 / 10.0 (First Class with Distinction)",
      coursework: [
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Object-Oriented Programming"
      ],
      achievements: [
        "Achieved 40+ certifications in technical domains.",
        "Academic Excellence: University Topper of the Semester (SGPA: 10.00).",
        "Secured 70/70 in Engineering Mathematics-III and 69/70 in Engineering Mathematics I & II."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Residential Junior College, Ahilyanagar.",
      location: "Ahilyanagar, Maharashtra, India",
      duration: "2021 – 2023",
      gpa: "81.00%",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Sanskrit"
      ],
      achievements: [
        "Achieved a Top 10 rank in the institution in the HSC & MHT-CET examinations.",
        "Secured 94/100 in Mathematics in the HSC (12th Board) examination.",
        "Achieved 97.15 percentile in MHT-CET (PCM) & 95.54 percentile in MHT-CET (PCB)."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Residential Highschool, Ahilyanagar.",
      location: "Ahilyanagar, Maharashtra, India",
      duration: "2020 – 2021",
      gpa: "97.80%",
      coursework: [
        "Mathematics",
        "Science",
        "English",
        "Social Science",
      ],
      achievements: [
        "Secured Rank 3 in the school in the SSC (10th Board) examination.",
        "Achieved outstanding scores in the SSC Board examination, securing 98/100 in Mathematics and 99/100 each in Science & Technology and Social Sciences."
      ]
    }
  ];

  const certifications: any[] = [];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>

        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-marker"></div>

                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <span className="duration">{edu.duration}</span>
                  </div>

                  <div className="institution-info">
                    <h4 className="institution-name">{edu.institution}</h4>
                    <p className="location">{edu.location}</p>
                    <p className="gpa">
                      GPA / Score: <span className="gpa-value">{edu.gpa}</span>
                    </p>
                  </div>

                  <div className="education-details">
                    <div className="coursework">
                      <h5>Major Coursework:</h5>
                      <ul className="coursework-list">
                        {edu.coursework.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {certifications.length > 0 && (
          <div className="certifications-section">
            <h3 className="certifications-title">Professional Certifications</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
