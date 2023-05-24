import React from "react";

function EducationCard({ imgPath, title, institution, duration }) {
  return (
    <div className="education-card">
      <img src={imgPath} alt={title} />
      <div className="education-details">
        <h2>{title}</h2>
        <h3>{institution}</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
}

export default EducationCard;
