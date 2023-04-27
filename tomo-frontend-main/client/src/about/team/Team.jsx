import React, { useState } from "react";
import classes from "./team.module.css";
import elie from "../../assets/elie-hannouch.jpg";
import journalist from "../../assets/journalist.jpeg";
import shafi from "../../assets/shafi.jpeg";
import girl2 from "../../assets/girl2.jpeg";
import japanese from "../../assets/japanese.jpeg";
import eliMatta from "../../assets/eliMatta.jpg";

const Team = () => {
  const [index, setIndex] = useState(0);


  const developers = [
    { name: "Laura Dulce Romero", position: "Journalist", src: journalist },
    { name: "Shafi Karimi", position: "Journalist", src: shafi },
    { name: "Radka Pudilova", position: "Project Manager", src: girl2 },
    { name: "Omid Sobhani", position: "Journalist", src: japanese },
    { name: "Elie Matta", position: "Art Designer", src: eliMatta },
  ];
  return (
    <>
      {/* Title */}
      <div className={classes.team}>
        <h3>
          <span>Team Members</span>
        </h3>
      </div>
      <div className={classes.team1}> 
        <div className="row g-4 mt-1">
          <div className="col-md-6 col-lg-4 px-4 px-md-4">
            <div className={`card ${classes.card}`}>
              <div className="text-center">
                <img
                  src={elie}
                  alt=""
                  className="img-fluid mb-3"
                  style={{ height: "265px", width: "100%" }}
                />
                <h3 className="card-title">Elie Hannouch</h3>
                <div className="card-text mb-3">
                  <p className={classes.position}>
                    <b>Software Engineer</b>
                  </p>
                  <a href="#" className="bi bi-twitter mx-1 text-dark"></a>
                  <a href="#" className="bi bi-facebook mx-1 text-dark"></a>
                  <a href="#" className="bi bi-instagram mx-1 text-dark"></a>
                  <a href="#" className="bi bi-linkedin mx-1 text-dark"></a>
                </div>
              </div>
            </div>
          </div>
          {developers.map((developer, i) => (
            <div key={i} className="col-md-6 col-lg-4 px-4 px-md-4">
              <div className={`card ${classes.card}`}>
                <div className=" text-center">
                  <img
                    src={developer.src}
                    alt=""
                    className="img-fluid mb-3"
                    style={{ height: "265px", width: "100%" }}
                  />
                  <h3 className="card-title">{developer.name} </h3>
                  <div className="mb-3 card-text">
                    <p className={classes.position}>
                      <b>{developer.position}</b>
                    </p>
                    <a href="#" className="bi bi-twitter mx-1 text-dark"></a>
                    <a href="#" className="bi bi-facebook mx-1 text-dark"></a>
                    <a href="#" className="bi bi-instagram mx-1 text-dark"></a>
                    <a href="#" className="bi bi-linkedin mx-1 text-dark"></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
