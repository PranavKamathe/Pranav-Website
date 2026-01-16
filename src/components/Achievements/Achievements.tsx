import React from 'react';
import './Achievements.css';


const Achievements: React.FC = () => {
  
  const achievements = [
  {
    id: 1,
    title: "Techquezt #26 AI All Around Us",
    organization: "Naukri Campus",
    date: "December 2025",
    description: "Explore how artificial intelligence is shaping our everyday life.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1TTUKSFdBnRRrkk_hEk4vkrheBauJHxnE/view?usp=drivesdk",
    color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
  },
  {
    id: 2,
    title: "Techquezt #25 Tech for Good",
    organization: "Naukri Campus",
    date: "November 2025",
    description: "Discover how technology is making a positive impact on society.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1-3RdVH0JT443hVwQSzOKm58D4Dc7xyXF/view?usp=drivesdk",
    color: "linear-gradient(135deg, #f6d365, #fda085)"
  },
  {
    id: 3,
    title: "Paranox 2.0 - A National Level Hackathon",
    organization: "TechXNinjas",
    date: "November 2025",
    description: "Innovate, collaborate, and build solutions that shape the future.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1qwVjLD-Qo7rQG5183yaMoUBrQAtLnr3X/view?usp=drivesdk",
    color: "linear-gradient(135deg, #d4fc79, #96e6a1)"
  },
  {
    id: 4,
    title: "TATA Crucible Campus Quiz 2025",
    organization: "Internshala",
    date: "November 2025",
    description: "India’s premier inter-collegiate quiz competition.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1s8sTDgjGp65tj70HlXgRHWhumDsFiKbq/view?usp=drivesdk",
    color: "linear-gradient(135deg, #cfd9df, #e2ebf0)"
  },
  {
    id: 5,
    title: "IASC Design Lead Certificate",
    organization: "IASC, DYPCOE",
    date: "September 2025",
    description: "Recognizing leadership and excellence in design.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1EwgIO5ZHDLUW-VGY7XRgro557wdvp93-/view?usp=drivesdk",
    color: "linear-gradient(135deg, #fddb92, #d1fdff)"
  },
  {
    id: 6,
    title: "ITESA Design Lead Certificate",
    organization: "ITESA, DYPCOE",
    date: "September 2025",
    description: "Certified for leading design and creative initiatives.",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/11MZ2ag_v7ArO90EvYaO6Sy3Bm7CTVKcA/view?usp=drivesdk",
    color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)"
  },
  {
    id: 8,
    title: "Software Developer Intern",
    organization: "Bluestock.in",
    date: "September 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1A8xAMcX4KiZW8I5gW58ae55CsldUcdOC/view?usp=drivesdk",
    color: "linear-gradient(135deg, #f6d365, #fda085)"
  },
  {
    id: 9,
    title: "Full Stack Developer Intern",
    organization: "Prodigy Infotech",
    date: "November 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1BWvqE_RmAvMoSYiZ8V6a_VF7r-EHr_uQ/view?usp=drivesdk",
    color: "linear-gradient(135deg, #84fab0, #8fd3f4)"
  },
  {
    id: 10,
    title: "Web Developer Intern",
    organization: "The Skybrisk",
    date: "December 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1efJ6bB9xYJjxH9poodUG6So6j-gp630S/view?usp=drivesdk",
    color: "linear-gradient(135deg, #fccb90, #d57eeb)"
  },
  {
    id: 11,
    title: "Campus Ambassador",
    organization: "Unstop",
    date: "December 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1qgX7KCnuFLvCriKKcyCisKLioVSWH-SW/view?usp=drivesdk",
    color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)"
  },
  {
    id: 12,
    title: "Web Developer Intern",
    organization: "Amdox Technologies",
    date: "November 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1Wx1pCuoxGENo16XtfhXu4QHYr2OCatMa/view?usp=drivesdk",
    color: "linear-gradient(135deg, #fbc8d4, #9796f0)"
  },
  {
    id: 13,
    title: "FY BTech Appreciation Certificate",
    organization: "Bajaj Power Equipment Pvt. Ltd.",
    date: "December 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1HmffC9ZAe0dej0fKXoc3EAfU4f2bySGH/view?usp=drive_link",
    color: "linear-gradient(135deg, #d9afd9, #97d9e1)"
  },
  {
    id: 14,
    title: "Adobe Hackathon Certificate",
    organization: "Unstop",
    date: "September 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1CFI4jAZl8XMIQDUNXdbu9iBMU8EnJ217/view?usp=drive_link",
    color: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"
  },
  {
    id: 15,
    title: "AI Ethics Certificate",
    organization: "ITESA DYPCOE",
    date: "April 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1kFspru2Mq7NNnYYlXl-ajWBq_fXQysLx/view?usp=drive_link",
    color: "linear-gradient(135deg, #e6dee9, #bdc2e8)"
  },
  {
    id: 16,
    title: "Angular Certificate",
    organization: "Infosys Springboard",
    date: "May 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1pOJhamCL0uwaBXIA8orh4JjSPb1ADmYw/view?usp=drive_link",
    color: "linear-gradient(135deg, #cfd9df, #e2ebf0)"
  },
  {
    id: 17,
    title: "Career Essentials in Generative AI Certificate",
    organization: "Microsoft & LinkedIn",
    date: "August 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1sUsqfIK9xhevsynk8HmHlcBuXC746I8B/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfcfb, #e2d1c3)"
  },
  {
    id: 18,
    title: "Database Management Certificate",
    organization: "NPTEL",
    date: "March 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1yup9hiCFcjlZ9EpJ-Cczo6iYcSPXbNXU/view?usp=drive_link",
    color: "linear-gradient(135deg, #e0eafc, #cfdef3)"
  },
  {
    id: 19,
    title: "Emotional Intelligence Certificate",
    organization: "LinkedIn",
    date: "August 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1tLLGRi_88OeC-yA5oglEF4c37coXMeT7/view?usp=drive_link",
    color: "linear-gradient(135deg, #fbc8d4, #fdfbfb)"
  },
  {
    id: 20,
    title: "Exploring Generative AI Certificate",
    organization: "GeeksforGeeks",
    date: "November 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1j3lHEawp0pr8q4yFl6CdoUXNSehYYDG2/view?usp=drive_link",
    color: "linear-gradient(135deg, #e8f5c8, #fef9d7)"
  },
  {
    id: 21,
    title: "HTML Basic Certificate",
    organization: "Complete Coding",
    date: "January 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1gTxSvFSQvtcM9lM1bscMZZS0jrCIrOxz/view?usp=drive_link",
    color: "linear-gradient(135deg, #fceabb, #f8b500)"
  },
  {
    id: 22,
    title: "Associate L1",
    organization: "Infotact Solutions",
    date: "August 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1j4RoVGzvVaQrRylOsj3cU05FmzWTjto2/view?usp=drive_link",
    color: "linear-gradient(135deg, #e3ffe7, #d9e7ff)"
  },
  {
    id: 23,
    title: "Campus Ambassador",
    organization: "InternsElite",
    date: "March 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1JeCe2SVwANC-GyUKNP7ZbsPBXwhV4_Ti/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfcfb, #f3e7e9)"
  },
  {
    id: 24,
    title: "Introduction to Cyber Security Awareness",
    organization: "HP",
    date: "October 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1yUypCYFRxBaiPWVWuRCamgcuOK5iD_gO/view?usp=drive_link",
    color: "linear-gradient(135deg, #e0f7fa, #f1f8e9)"
  },
  {
    id: 25,
    title: "Introduction to Cyber Security",
    organization: "Infosys Springboard",
    date: "August 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1kj-VWDeoioMbNlPrrn170UVw6e7P6Ptb/view?usp=drive_link",
    color: "linear-gradient(135deg, #d7d2cc, #304352)"
  },
  {
    id: 26,
    title: "Introduction to Data Science",
    organization: "Cognitive Class.ai",
    date: "August 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1SDu2WMbjTVu88NMFrEqcTGqxVmHy_jeF/view?usp=drive_link",
    color: "linear-gradient(135deg, #f1fcfd, #c2e9fb)"
  },
  {
    id: 27,
    title: "Java Programming Workshop",
    organization: "DYPCOE",
    date: "April 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1IGzHWqryCg2XDNC0bDCXxrT2XoEYVRD3/view?usp=drive_link",
    color: "linear-gradient(135deg, #fff1eb, #ace0f9)"
  },
  {
    id: 28,
    title: "Data Science Intern",
    organization: "MyDailyWork",
    date: "November 2024",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/12N5-Aj31CQv9hShlqkCoZ06_cxva0lsA/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfbfb, #ebedee)"
  },
  {
    id: 29,
    title: "Navigating AI Development & DSA",
    organization: "CPMC DYPCOE",
    date: "July 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1ISYvouXE_S5k3p-1znL3EXDNR11ZyI78/view?usp=drive_link",
    color: "linear-gradient(135deg, #e6e9f0, #eef1f5)"
  },
  {
    id: 30,
    title: "Web Development & Designing Intern",
    organization: "Oasis Pvt. Ltd.",
    date: "September 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1FlaTaM31JzkYWVzesVl9fetBJYfqi-2L/view?usp=drive_link",
    color: "linear-gradient(135deg, #fbc8d4, #fdfbfb)"
  },
  {
    id: 31,
    title: "Web Development Intern",
    organization: "Orinson Technologies Pvt. Ltd.",
    date: "January 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1nsHDINBGeh27XQ7apyfwclh3jCL5lpyB/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfcfb, #e2d1c3)"
  },
  {
    id: 32,
    title: "Web Development Intern",
    organization: "Orinson Technologies Pvt. Ltd.",
    date: "November 2024",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1giU-PkORFppwGMdTEHSWC05HMfiPCCFo/view?usp=drive_link",
    color: "linear-gradient(135deg, #e0eafc, #cfdef3)"
  },
  {
    id: 33,
    title: "Prompt Engineering for Everyone",
    organization: "Cognitive Class.ai",
    date: "September 2024",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1wyYUVNU7boJcUkrMbeZDw4xatn9nXpBT/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfbfb, #ebedee)"
  },
  {
    id: 34,
    title: "Python for Data Science",
    organization: "Cognitive Class.ai",
    date: "January 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1XGY4XoXTie2okb4hhx4u1g5Vd83hW1n3/view?usp=drive_link",
    color: "linear-gradient(135deg, #d4fc79, #96e6a1)"
  },
  {
    id: 35,
    title: "Rotract Marathon Volunteer",
    organization: "Rotract Club DYPCOE",
    date: "March 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1vzXAl1shAC4TYrSX-tgzR8eNPKzVzXq2/view?usp=drive_link",
    color: "linear-gradient(135deg, #e6dee9, #bdc2e8)"
  },
  {
    id: 36,
    title: "Techfest Volunteer",
    organization: "Toastmaster DYPCOE",
    date: "February 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/17VqMKtgk9doekg5GI0Ne8fsvVJO0iegt/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfcfb, #f3e7e9)"
  },
  {
    id: 37,
    title: "Full Stack Developer Intern",
    organization: "The Developers Arena",
    date: "August 2025",
    icon: "🏅",
    category: "Certification",
    link: "https://drive.google.com/file/d/1zllHZ1hOP5FtWh91xbRs3x_eH0rY1mqe/view?usp=drive_link",
    color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
  },
  {
    id: 38,
    title: "Full Stack Developer Intern",
    organization: "The Developers Arena",
    date: "February 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1Ng-7Igr1n1YKh4PxMQ3z-6BvEItDYipV/view?usp=drive_link",
    color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)"
  },
  {
    id: 39,
    title: "Full Stack Developer Intern",
    organization: "Zidio Development",
    date: "July 2025",
    icon: "⭐",
    category: "Offer Letter",
    link: "https://drive.google.com/file/d/1jBBQDUOAJLtmrtCi3DtySZGxDX7hVPUR/view?usp=drive_link",
    color: "linear-gradient(135deg, #fdfbfb, #ebedee)"
  }
];



    



    

  

  const categories = ["All", "Certification", "Offer Letter"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [animatedItems, setAnimatedItems] = React.useState<number[]>([]);

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(filteredAchievements.map(item => item.id));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredAchievements]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setAnimatedItems([]);
  };

  

  return (
  <section id="achievements" className="section">
    
    <div className="container">
      <div className="section-header">
        <h2>Achievements & Recognition</h2>
        <p className="section-description">
          A showcase of certifications, awards, and offer letters that highlight my professional journey 
          and commitment to continuous learning and excellence in technology.
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="achievements-scroll">
        <div className="achievements-grid">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`achievement-card ${animatedItems.includes(achievement.id) ? 'animate' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--accent-color': achievement.color 
              } as React.CSSProperties}
            >
              <div className="achievement-header">
                <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                  {achievement.icon}
                </div>
                <div className="achievement-meta">
                  <span className="achievement-category">{achievement.category}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>

              <div className="achievement-footer">
                {achievement.link !== "#" && (
                  <a 
                    href={achievement.link} 
                    className="achievement-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Details
                    <span className="link-arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* 
      <div className="achievements-cta">
        <h3>Continuous Learning Journey</h3>
        <p>
          I believe in continuous improvement and staying updated with the latest technologies. 
          These achievements represent milestones in my ongoing journey of professional growth.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
          <a 
            href="https://linkedin.com/in/aniketkulkarni" 
            className="btn btn-outline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </div>
      </div>
      */}
    </div>
  </section>
);
}
export default Achievements;
