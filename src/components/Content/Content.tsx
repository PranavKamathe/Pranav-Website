import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import BookIcon from "@mui/icons-material/Book";
import Link from "@mui/material/Link";
import { useMediaQuery } from "react-responsive";
import "./Content.css";
function Content() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 480px)",
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div className="Content">
      <div>
        <Typography variant={"h4"}>About me</Typography>
        <hr/>
        <Typography>I am Pranav Kamathe,</Typography>
        <Typography>
          A passionate and results-driven Software Development Engineer with
          extensive experience in designing and implementing robust, scalable,
          and efficient software solutions. Currently based in Bengaluru, India,
          I thrive on solving complex challenges and delivering impactful
          technology to enhance user experiences and operational excellence.
        </Typography>
        <Typography>
            At the Cyber Police Station, I played a crucial role as a Cyber Security Intern in handling cybercrime complaints, 
              maintaining digital records, and assisting in preliminary investigations. My responsibilities included analyzing 
              fraud cases, managing complaint registers, and supporting officers with cyber incident documentation, 
              significantly improving case handling efficiency. 
          
        </Typography>
        <Typography>
            Previously, as a Web Development Intern at Orinson Technologies Pvt. Ltd., I contributed to building
              responsive and full-stack web applications by developing dynamic user interfaces 
              and backend integrations, improving usability, scalability, and performance 
              for client-focused solutions.
          
        </Typography>
        <Typography>
            With a strong foundation in Data Structures, System Design, and Full-Stack Development, I am proficient 
              in technologies such as HTML/CSS,JavaScript, MongoDB, Express.js, React.js, Node.js, etc. My work consistently reflects 
              my dedication to crafting seamless, scalable solutions that align with business goals.
          
        </Typography>
        <Typography>
          When not coding, I enjoy exploring cutting-edge technology trends,
          engaging in problem-solving challenges, and continuously learning to
          stay ahead in the dynamic field of software engineering.
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Skills</Typography>
        <hr/>
        {isDesktopOrLaptop ? (
          <Grid container spacing={2}>
            <Grid size={4}>
              <Item>Data Structures</Item>
            </Grid>
            <Grid size={4}>
              <Item>Algorithms</Item>
            </Grid>
            <Grid size={4}>
              <Item>System Design</Item>
            </Grid>
            <Grid size={2}>
              <Item>C++</Item>
            </Grid>
            <Grid size={2}>
              <Item>Java</Item>
            </Grid>
            <Grid size={2}>
              <Item>Javascript</Item>
            </Grid>
            <Grid size={2}>
              <Item>Typescript</Item>
            </Grid>
            <Grid size={2}>
              <Item>React</Item>
            </Grid>
            <Grid size={2}>
              <Item>MongoDB</Item>
            </Grid>
            <Grid size={2}>
              <Item>Node.js</Item>
            </Grid>
            <Grid size={2}>
              <Item>Express.js</Item>
            </Grid>
            <Grid size={2}>
              <Item>HTML - CSS</Item>
            </Grid>
            <Grid size={2}>
              <Item>SQL</Item>
            </Grid>
            <Grid size={4}>
              <Item>Next.js</Item>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid size={6}>
              <Item>Data Structures</Item>
            </Grid>
            <Grid size={6}>
              <Item>Algorithms</Item>
            </Grid>
            <Grid size={6}>
              <Item>System Design</Item>
            </Grid>
            <Grid size={6}>
              <Item>C++</Item>
            </Grid>
            <Grid size={6}>
              <Item>Java</Item>
            </Grid>
            <Grid size={6}>
              <Item>Javascript</Item>
            </Grid>
            <Grid size={6}>
              <Item>Typescript</Item>
            </Grid>
            <Grid size={3}>
              <Item>React</Item>
            </Grid>
            <Grid size={3}>
              <Item>MongoDB</Item>
            </Grid>
            <Grid size={6}>
              <Item>Express.js</Item>
            </Grid>
            <Grid size={6}>
              <Item>Node.js</Item>
            </Grid>
            <Grid size={6}>
              <Item>HTML - CSS</Item>
            </Grid>
            <Grid size={3}>
              <Item>SQL</Item>
            </Grid>
            <Grid size={3}>
              <Item>Next.js</Item>
            </Grid>
          </Grid>
        )}
      </div>
      <div>
        <Typography variant={"h4"}>Experience</Typography>
        <hr/>
        <Typography>
          <div className="horizontal">
            <Typography variant={"h5"}>Cyber Police Station</Typography>
            <Typography>( From Jan 2026 )</Typography>
          </div>
          <Typography variant={"h6"}>
            Cyber Security Intern
          </Typography>
          <Typography>
            - Assisted in handling and documenting cybercrime complaints, including online fraud, phishing, and social media offenses.
          </Typography>
          <Typography>
            - Maintained and analyzed cyber complaint registers to support investigation and case tracking.
          </Typography>
          <Typography>
            - Supported preliminary cyber investigations by reviewing digital evidence and identifying fraud patterns.
          </Typography>
          <Typography>
            - Gained practical exposure to cyber laws, cyber forensics basics, and real-world incident response procedures.
          </Typography>
          <Typography>
            - Helped improve complaint processing accuracy and response efficiency through systematic documentation.
          </Typography>
          {/*<Typography variant={"h6"}>
            Software Development Engineer I
          </Typography>
          <Typography>
            <Typography>
              - Developed the user interface for a validation tool that served
              150+ internal and external consumers.
            </Typography>
            <Typography>
              - Implemented a notification feature which completely removed
              manual intervention required by the product team across 10+ org
              teams.
            </Typography>
            <Typography>
              - Created automated dashboards that reduced monitoring setup
              efforts by 90% improving Operational Excellence.
            </Typography>
            <Typography>
              - Designed a Highly scalable backend to control device state which
              reduced 50% to 90% time cost in eminent failures.
            </Typography>
            <Typography>
              - Designed and Implemented a credential store for secure storage
              of susceptible data.
            </Typography>
          </Typography>*/}
          <br />
          <div className="horizontal">
            <Typography variant={"h5"}>Orinson Technologies Pvt Ltd </Typography>
            <Typography>( Dec 2024 - Jan 2025 )</Typography>
          </div>
          <Typography variant={"h6"}>Web Development Intern</Typography>
          <Typography>
            <Typography>
              - Worked on full-stack web projects involving frontend development and backend integration.
            </Typography>
            <Typography>
              - Collaborated with senior developers to understand project requirements and deliver client-focused solutions.
            </Typography>
            <Typography>
              - Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frontend practices to ensure smooth performance across multiple devices and screen sizes.
            </Typography>
            
          </Typography>
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Education</Typography>
        <hr/>
        <Typography>
          <Typography variant={"h6"}>
            Dr. D.Y. Pratishthan's D.Y. Patil College of Engineering, Akurdi, Pune.
          </Typography>
          <Typography>
            <Typography>Grade: 9.58 CGPA</Typography>
            <Typography>
              Activities and societies: Actively participated in 4+ technical and non-technical 
              clubs across various domains within the college and remained involved in 
              multiple student-led activities. Served as a Campus Ambassador, promoting events 
              and learning initiatives while contributing to workshops, seminars, and college events, 
              which helped develop leadership, teamwork, and communication skills.
            </Typography>
            <Typography>
              - Design Lead/Coordinator: Led design teams at ITESA & IASC DYPCOE, delivering high-quality 
creatives; also handled event designs for NSS DYPCOE using Canva.
            </Typography>
            <Typography>
              - Campus Ambassador: Represented Unstop, InternsElite & Pune StartUp Fest - 2026, promoting events, learning programs, 
and internship opportunities on campus.
            </Typography>
            <Typography>
              - Club Leadership: Served as Associate Club Service Director at Rotaract DYPCOE, supporting club 
operations and team coordination.
            </Typography>
            <Typography>- Volunteer Experience: Volunteered at Techfest Toastmasters DYPCOE and Rotaract DYPCOE 
Marathon events.</Typography>
            <Typography>- Built and managed a LinkedIn community of 6k+ followers.</Typography>
          </Typography>
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Achievements</Typography>
        <hr/>
        <Typography>
          - Recognized with Special Recognition Award from Tata Consultancy
          Services.
        </Typography>
        <Typography>
          - Secured World Rank 482 and India Rank 79 in Google HashCode 2021
          amongst 10000 teams.
        </Typography>
        <Typography>
          - Secured World Rank 49 in Hackerearth Circuits Dec 2020.
        </Typography>
        <Typography>
          - Qualified for the ACM-ICPC Asia Amritapuri onsite Regionals 2017.
        </Typography>
        <Typography>
          - Was among top 0.6% of about 1 lack students that appeared in GATE
          2019, with All India Rank 851.
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Others</Typography>
        <hr/>
        <div className={"horizontal"}>
          <BookIcon />
          <Link href="">
            My journey from Service-Based to Product-Based company(Amazon)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;