import { useEffect, useState } from "react";
import { technicalSkills, functionalSkills } from "./data";

function Skills() {
  const [technicalSkillsList, setTechnicalSkillsList] = useState([]);
  const [functionalSkillsList, setFunctionalSkillsList] = useState([]);

  useEffect(() => {
    setTechnicalSkillsList(technicalSkills);
    setFunctionalSkillsList(functionalSkills);
  }, []);

  return (
    <>
      <h5 className="card-title font-italic m-5" style={{ color: "#800080" }}>
        Technical Skills
      </h5>
      <div className="card-deck m-5">
        {technicalSkillsList.map((eachSkill) => (
          <div className="card text-center">
            <img
              src={eachSkill.thumbnailUrl}
              style={{ borderRadius: "10%", width: "60px", height: "60px" }}
              className="m-2 card-img-top mx-auto d-block"
              alt={eachSkill.title}
            />
            <div className="card-body">
              <p className="card-text font-italic" style={{ color: "#800080" }}>
                {eachSkill.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h5 className="card-title font-italic m-5" style={{ color: "#800080" }}>
        Functional Skills
      </h5>
      <div className="card-deck m-5">
        {functionalSkillsList.map((eachSkill) => (
          <div className="card text-center">
            <img
              src={eachSkill.thumbnailUrl}
              style={{ borderRadius: "10%", width: "60px", height: "60px" }}
              className="m-2 card-img-top mx-auto d-block"
              alt={eachSkill.title}
            />
            <div className="card-body">
              <p className="card-text font-italic" style={{ color: "#800080" }}>
                {eachSkill.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
