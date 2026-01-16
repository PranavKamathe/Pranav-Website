
import "./Coding.css";

import React from "react";
import {
  SiHackerrank,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";


const codingProfiles = [
  {
    name: "HackerRank",
    icon: <SiHackerrank />,
    url: "https://www.hackerrank.com/profile/pranavkamathe198",
    color: "#2EC866",
    desc: "Practice coding skills and prepare for interviews with real-world challenges."
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/pranav_kamathe32/",
    color: "#F4C430",
    desc: "Strengthen data structures and algorithms through curated problem sets."
  },
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    url: "https://www.codechef.com/users/pran8799",
    color: "#C39A6B",
    desc: "Participate in competitive programming contests and improve problem-solving speed."
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    url: "https://www.geeksforgeeks.org/profile/pranavkamgmsh",
    color: "#2F8D46",
    desc: "Learn core CS concepts with tutorials, practice problems, and interview prep."
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section">
      <div className="container">
        <h2>Coding Profiles</h2>
        <p className="profiles-intro">
          I actively practice problem-solving and competitive programming across
          multiple platforms.
        </p>

        <div className="coding-grid">
          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-card"
              style={{ "--accent": profile.color } as React.CSSProperties}
            >
              <div className="coding-icon">{profile.icon}</div>

              <h3 className="coding-title">{profile.name}</h3>

              {/* ✅ NEW DESCRIPTION */}
              <p className="coding-desc">{profile.desc}</p>

              <span className="coding-link">View Profile →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
