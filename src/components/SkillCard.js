import React from 'react';

const SkillCard = (skillData) => {
  const data = skillData.data;
  return (
    <div className="card">
      <h3>{data.header}</h3>
      <span className="bar"></span>
      {data &&
        data.skills.map((skill) => (
          <p key={`${data.id}-${skill}`} className="skill-item">
            {skill}
          </p>
        ))}
    </div>
  );
};

export default SkillCard;
