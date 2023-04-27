import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Imaginary.module.css";
import Card1 from "./card/Card";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

// const cards = [
//   {
//     title: "Afghanistan: The dream of girls education.",
//     description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     image: afghan,
//     type: "education",
//     footerFirst: "Hii all",
//     footerMiddle: "Steps toward a better tomorrow",
//     footerEnd: " hosted in afghanistan.2050-05-07",
//   },
//   {
//     title: "Afghanistan: The dream of girls education.",
//     description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     image: afghan,
//     type: "education",
//     footerFirst: "Hii all",
//     footerMiddle: "Steps toward a better tomorrow",
//     footerEnd: " hosted in afghanistan.2050-05-07",
//   },
//   {
//     title: "Afghanistan: The dream of girls education.",
//     description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     image: afghan,
//     type: "education",
//     footerFirst: "Hii all",
//     footerMiddle: "Steps toward a better tomorrow",
//     footerEnd: " hosted in afghanistan.2050-05-07",
//   },
//   {
//     title: "Afghanistan: The dream of girls education.",
//     description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     image: afghan,
//     type: "education",
//     footerFirst: "Hii all",
//     footerMiddle: "Steps toward a better tomorrow",
//     footerEnd: " hosted in afghanistan.2050-05-07",
//   },
//   {
//     title: "Afghanistan: The dream of girls education.",
//     description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     image: afghan,
//     type: "education",
//     footerFirst: "Hii all",
//     footerMiddle: "Steps toward a better tomorrow",
//     footerEnd: " hosted in afghanistan.2050-05-07",
//   },
// ];

const Imaginary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);

  const [lebanon, setLebanon] = useState(false);
  const [afghanistan, setAfghanistan] = useState(false);
  console.log(lebanon);

  const handleFilterChange = async () => {
    const response = await axios.get(
      `https://tomo-backend-l18z.vercel.app/api/artifact/filter?sortByLebanon=${
        lebanon ? "lebanon" : ""
      }&sortByAfghanistan=${afghanistan ? "afghanistan" : ""}`
    );
    setCards(response.data.data);
  };
  
  

  const jobsPerPage = 4;
  //const totalPages = 4;
  const totalPages = Math.ceil(cards?.length / jobsPerPage);
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
        `https://tomo-backend-l18z.vercel.app/api/artifact/search?title=${search}`
      );
      setCards(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const getArtifacts = async () => {
      try {
        const { data } = await axios.get("https://tomo-backend-l18z.vercel.app/api/artifact");
        setCards(data.data);
        console.log(data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getArtifacts();
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    handleFilterChange();
  }, [lebanon, afghanistan]);
  return (
    <div className={classes.banner}>
      <div className={classes.bannerHeader}>
        <h1>
          We conduct design fiction workshops, which result in solution-oriented
          dialogues
        </h1>
      </div>
      <div className={classes.bannerBodyHeader}>
        <h3> We can explore the artifacts of these workshops here.</h3>
      </div>
      <div className={classes.centeredDiv}>
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
      <div className={classes.bannerBody}>
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
                id="sortByLebanon"
                style={{ marginLeft: "20px" }}
                checked={lebanon}
                onChange={(e) => {
                  setLebanon(e.target.checked);
                }}
              />
              <label
                className="form-check-label"
                for="defaultCheck1"
                style={{ marginRight: "30px" }}
              >
                <b>Lebanon</b>
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
                id="sortByAfghanistan"
                style={{ marginLeft: "20px" }}
                checked={afghanistan}
                onChange={(e) => {
                  setAfghanistan(e.target.checked);
                }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Afghanistan</b>
              </label>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.cards}>
            {cards
              .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
              .map((card, i) => (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/imaginary/artifact/${card._id}`}
                >
                  <Card1
                    key={i}
                    title={card.title}
                    description={card.smallDescription}
                    image={card.artifactImage}
                    type={card.type}
                    footerFirst={card.footerFirst}
                    footerSecond={card.source}
                    footerThird={card.footerEnd}
                  />
                </Link>
              ))}
            {cards?.length === 0 && (
              <h1
                style={{
                  textAlign: "center",
                  color: "rgb(35, 35, 134)",
                }}
              >
                No artifacts found. Our team will add them soon.
              </h1>
            )}
          </div>
          <ToastContainer />
          {cards?.length > 0 && (
            <div className={classes.pagination}>
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
                          pageNumber === currentPage ? classes.active : ""
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
        </div>
      </div>
    </div>
  );
};

export default Imaginary;
