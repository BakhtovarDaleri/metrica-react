// import React from "react";
// import "./ProjectCard.css";

// function ProjectCard(props) {
//   return (
//     <div className="projects-cards">
//       {props.isNew && <div>isNew</div>}
//       <img src={props.image} alt={props.title} />
//       <p className="project-card-info">
//         {props.title} — {props.square} м² — {props.year}
//       </p>
//       <a href={props.link} className="project-link">
//         Подробнее &#8594;
//       </a>
//     </div>
//   );
// }

// export default ProjectCard;\
import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="projects-cards">
      {props.isNew && (
        <div className="new-badge">NEW</div> // Добавляем метку "NEW"
      )}
      <img src={props.image} alt={props.title} />
      <p className="project-card-info">
        {props.title} — {props.square} м² — {props.year}
      </p>
      <a href={props.link} className="project-link">
        Подробнее &#8594;
      </a>
    </div>
  );
}

export default ProjectCard;
