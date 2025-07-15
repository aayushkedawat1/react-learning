import "./styles.css";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillSet";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          {skills.map((element) => (
            <SkillList skill={element} />
          ))}
          {/* <SkillList skill="Dart" emoji="💪🏻" color="blue" />
          <SkillList skill="Flutter" emoji="💪🏻" color="lightblue" />
          <SkillList skill="Firebase" emoji="💪🏻" color="orangered" />
          <SkillList skill="Docker" emoji="💪🏻" color="aqua" />
          <SkillList skill="NestJS" emoji="💪🏻" color="grey" />
          <SkillList skill="NextJS" emoji="💪🏻" color="green" />
          <SkillList skill="CI/CD" emoji="💪🏻" color="yellow" /> */}
        </div>
      </div>
    </div>
  );
}
export default App;
