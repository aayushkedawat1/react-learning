function SkillList({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner"
          ? "👶🏻"
          : skill.level === "intermediate"
          ? "👍🏻"
          : "💪🏻"}
      </span>
    </div>
  );
}
export default SkillList;
