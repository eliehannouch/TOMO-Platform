import React, { useState } from "react";
import classes from "./join3.module.css";
import confirm from "../../assets/confirm2.png";
import lebanon from "../../assets/lebanon.jpg";
import jordan from "../../assets/jordan.jpg";

const whyQuestion = [
  {
    name: "Engagement in constructive dialogue in a safe space about issues affecting your community.",
  },
  {
    name: "Contact with journalists, with who you can share experiences or facts of interest. ",
  },
  {
    name: "Networking to boost your projects, ideas or solutions.    ",
  },
  {
    name: "Learning about topics you want to go deeper into or discover some you don't know about.    ",
  },
  {
    name: "Inspiration through ideas/solutions shared by other participants.",
  },
  {
    name: "Being part of a publication within the platform.",
  },

];

const events = [
  {
    name: "The Financial Crisis in Lebanon",
    method: "Online",
    data: "Sunday, April 2, 2023",
    img: lebanon,
    link: "https://forms.gle/WtXVe3qn25cYZ14N8",
  },
  {
    name: "Human Rights in Afghanistan",
    method: "Online",
    data: "Sunday, April 2, 2023",
    img: jordan,
    link: "https://forms.gle/WtXVe3qn25cYZ14N8",
  },
  {
    name: "Lebanon: A country for all",
    method: "Online",
    data: "Sunday, April 2, 2023",
    img: lebanon,
    link: "https://forms.gle/WtXVe3qn25cYZ14N8",
  },
  {
    name: "Human Rights in Afghanistan",
    method: "Online",
    data: "Sunday, April 2, 2023",
    img: jordan,
    link: "https://forms.gle/WtXVe3qn25cYZ14N8",
  },
];

const JoinUs3 = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 3;
  const totalPages = Math.ceil(events?.length / jobsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className={classes.joinContainer3}>
        <div className={classes.title3}>
          <h2>Why should you join TOMO as a participant</h2>
        </div>

        <div className={classes.allAnswers}>
          {whyQuestion.map((question, i) => (
            <div className={classes.rowAnswer}>
              <div className={classes.icon}>
                <img src={confirm} alt="confirm" />
              </div>
              <div className={classes.answerText}>{question.name}</div>
            </div>
          ))}
        </div>
        <div className={classes.upcoming}>
          <div className={classes.upcomingTitle}>
            <h2>Upcoming Workshops</h2>
          </div>
          <div>
            <ul className={`mb-5 ${classes.eventListings}`}>
              {events
                ?.slice(
                  (currentPage - 1) * jobsPerPage,
                  currentPage * jobsPerPage
                )
                ?.map((event, i) => {
                  return (
                    <li
                      key={i}
                      className={`d-block d-sm-flex  pb-sm-0 align-items-center mb-4 ${classes.eventListing}`}
                    >
                      <div className={classes.eventListingLogo}>
                        <img
                          src={event.img}
                          alt="Free Website Template by Free-Template.co"
                          className="img-fluid"
                        />
                      </div>

                      <div className="d-sm-flex flex-sm-column custom-width w-100 justify-content-between mx-4">
                        <div
                          className={`custom-width mb-3 mb-sm-0 ${classes.eventListingPosition}`}
                        >
                          <h2>
                            <b>{event.name}</b>
                          </h2>
                          <p>{event.data}</p>
                          <p className={classes.description}>
                            Lorem ipsum dolor amet consectetur adipisicing
                            elit. Molestias dolorum, amet ex soluta a qui?
                          </p>
                        </div>
                        <div className="mb-3 mb-sm-0 custom-width w-25">
                          <span className="icon-room"></span>
                          {event.date}
                        </div>
                        <div className={classes.links}>
                          <div>
                            <span className={`badge-danger ${classes.badge}`}>
                              {event.method}
                            </span>
                          </div>
                          <div className={classes.register}>
                            <a target="_blank" href={event.link}>
                              Register here
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <div className="row pagination-wrap">
              <div className="col-md-6 text-center text-md-left mb-4 mb-md-0"></div>
              <div className="col-md-6 text-center text-md-right">
                <div className={`${classes.customPagination} ml-auto`}>
                  <a
                    href="#"
                    className={classes.prev}
                    onClick={(e) => {
                      e.preventDefault();
                      if(currentPage === 1) return 
                      handleClick(currentPage - 1);
                    }}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </a>
                  <div className="d-inline-block mb-5">
                    {pageNumbers.map((pageNumber) => (
                      <a
                        key={pageNumber}
                        href="#"
                        className={pageNumber === currentPage ?  `${classes.active}` : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(pageNumber);
                        }}
                      >
                        {pageNumber}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className={classes.next}
                    onClick={(e) => {
                      e.preventDefault();
                      if(currentPage===totalPages) return
                      handleClick(currentPage + 1);
                    }}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs3;
