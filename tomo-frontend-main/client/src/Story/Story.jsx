import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./story.module.css";
import axios from "axios";

const Story = () => {
  const { storyType } = useParams();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [specificStories, setSpecificStories] = useState([]);
  const [date, setDate] = useState(false);
  const [sortByAuthor, setSortByAuthor] = useState(false);
  const [storyCountry, setStoryCountry] = useState(false);


  const { id } = useParams();
  const jobsPerPage = 2;
  //const totalPages = 4;
  const totalPages = Math.ceil(specificStories?.length / jobsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://tomo-backend-l18z.vercel.app/api/story/search?query=${search}`
      );
      setSpecificStories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = async () => {
    const response = await axios.get(
      `https://tomo-backend-l18z.vercel.app/api/story/${storyType}/filter?sortByDate=${date}&sortByAuthor=${sortByAuthor}&storyCountry=${storyCountry}`
    );
    setSpecificStories(response.data.data);
  };

  useEffect(() => {
    const getSpecificStories = async () => {
      try {
        const { data } = await axios.get(
          `https://tomo-backend-l18z.vercel.app/api/story/${storyType}`
        );
        setSpecificStories(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecificStories();
  }, []);
  
  useEffect(() => {
    handleFilterChange();
  }, [date, setSortByAuthor, storyCountry]);

  return (
    <>
      {/* Title */}
      <div className={classes.title}>
        <h2>{storyType.split("-").join(" ").toUpperCase()}</h2>
      </div>
      <div className={classes.search}>
        <div className={classes.searchBar}>
          <form onSubmit={handleSearch}>
            <input
              value={search}
              type="text"
              placeholder="search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">search</button>
          </form>
        </div>
      </div>
      <div className={classes.educationContainer}>
        <div className={classes.filter}>
          <div className={classes.filterHeader}>Filtered By</div>
          <div className={classes.filterOptions}>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                marginTop: "30px",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sortByDate"
                style={{ marginLeft: "20px" }}
                checked={date}
                onChange={(e) => {
                  setDate(e.target.checked);
                }}
              />
              <label
                className="form-check-label"
                for="defaultCheck1"
                style={{ marginRight: "30px" }}
              >
                <b>Date</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sortByAuthor"
                style={{ marginLeft: "20px" }}
                checked={sortByAuthor}
                onChange={(e) => {
                  setSortByAuthor(e.target.checked);
                }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Author</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="storyCountry"
                style={{ marginLeft: "20px" }}
                checked={storyCountry}
                onChange={(e) => {
                  setStoryCountry(e.target.checked);
                }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Country</b>
              </label>
            </div>
            {/* <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                style={{ marginLeft: "20px" }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Rating</b>
              </label>
            </div> */}
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.bottomEducation}>
            {specificStories?.length > 0 &&
              specificStories
                ?.slice(
                  (currentPage - 1) * jobsPerPage,
                  currentPage * jobsPerPage
                )
                ?.map((story, index) => (
                  <div key={index} className={classes.singleEducation}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/stories/${storyType}/content/${story._id}`}
                    >
                      <div className={classes.storySpan}>
                        <span>Story</span>
                      </div>
                      <div className={classes.singleTitle}>
                        <h3>{story.storyTitle}</h3>
                      </div>
                      <div className={classes.educationImg}>
                        <img src={story.storyImage} alt={story.storyImage} />
                      </div>
                      <div className={classes.belowSingleImg}>
                        <p>{story.storyDescription}</p>
                      </div>
                      <div className={classes.footerSingle}>
                        <div className={classes.journalist}>
                          <p>JOURNALIST</p>
                          <span>{story.storyAuthor}</span>
                        </div>
                        <div className={classes.date}>
                          <p>DATE</p>
                          <span>
                            {story.storyDate
                              ? new Date(story.storyDate).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )
                              : ""}
                          </span>
                        </div>
                        <div className={classes.outlet}>
                          <p>NEWS OUTLET</p>
                          <span>{story.storyCompany}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {specificStories.length === 0 && (
        <h4
          style={{
            textAlign: "center",
            color: "blue",
            width: "100%",
            marginTop: "-5%",
          }}
        >
          No Stories found. Our team will add them soon.
        </h4>
      )}
      {specificStories.length > 0 && (
        <div className={classes.pagination}>
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0"></div>
          <div className="mt-3">
            <div className={`${classes.customPagination}`}>
              <a
                href="#"
                className={classes.prev}
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage === 1) return;
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
                    className={
                      pageNumber === currentPage ? `${classes.active}` : ""
                    }
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
                  if (currentPage === totalPages) return;
                  handleClick(currentPage + 1);
                }}
                disabled={currentPage === totalPages}
              >
                Next
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Story;
