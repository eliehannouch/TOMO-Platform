import React, { useEffect, useState } from "react";
import classes from "./storyContent.module.css";
import { ToastContainer, toast } from "react-toastify";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material/";
import "react-toastify/dist/ReactToastify.css";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryContent = () => {
  const { storyType, storyID } = useParams();
  const [story, setStory] = useState([]);
  const notify = () =>
    toast.success("Your comment was sent for moderation", {
      style: {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      },
    });
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([]);
  const [like, setLike] = useState(false);
  const handleComment = async (e) => {
    e.preventDefault();
    const name = prompt("what is your name");
    try {
      const formData = {
        commentOwner: name,
        commentContent: comment,
        isModeretated: false,
      };
      const data = await axios.post(
        `https://tomo-backend-l18z.vercel.app/api/story/comment/${storyID}`,
        formData
      );
      notify();
      setComment("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const getSingleStory = async () => {
      try {
        const { data } = await axios.get(
          `https://tomo-backend-l18z.vercel.app/api/story/${storyType}/${storyID}`
        );
        setStory(data.data);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    getSingleStory();
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          `https://tomo-backend-l18z.vercel.app/api/story/comment/${storyID}`
        );
        console.log(data);
        setListComment(data);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    getComment();
    window.scroll(0, 0);
  }, []);

  const likedFuture = async () => {
    if (like) {
      try {
        const { data } = await axios.patch(
          `https://tomo-backend-l18z.vercel.app/api/story/dslike/${storyID}`
        );
        setStory(data.data);
        setLike(!like);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const { data } = await axios.patch(
          `https://tomo-backend-l18z.vercel.app/api/story/like/${storyID}`
        );
        setStory(data.data);
        setLike(!like);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  };

  const shareableLink = async () => {
    try {
      const { data } = await axios.patch(
        `https://tomo-backend-l18z.vercel.app/api/story/link/${storyType}/${storyID}`
      );
      console.log(data.data);
      navigator.clipboard
        .writeText(data.data)
        .then(() => {
          toast.success("Copied");
        })
        .catch((error) => {
          console.error(`Error copying to clipboard: ${error}`);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={classes.allPage}>
      <div className={classes.firstSection}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <h2>{story.storyTitle}</h2>
          </div>
          <div className={classes.headerIcons}>
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
              }}
            >
              {story.likes}
            </span>
            {like ? (
              <FavoriteOutlined
                sx={{ color: "red", fontSize: "35px", marginRight: "25px" }}
                onClick={likedFuture}
              />
            ) : (
              <FavoriteBorderOutlined
                sx={{ fontSize: "35px", marginRight: "25px" }}
                onClick={likedFuture}
              />
            )}
            <ShareIcon
              sx={{
                color: "white",
                fontSize: "40px",
                borderRadius: "50%",
                padding: "3%",
                backgroundColor: "rgb(34, 71, 115)",
              }}
              onClick={shareableLink}
            />
          </div>
        </div>
        <img src={story.storyImage} alt="afghan" />
        <div className={classes.author}>
          <div className={classes.ownerImg}>
            <img
              style={{ width: "150px", height: "100px" }}
              src={story.storyAuthorImage}
              alt={story.storyAuthorImage}
            />
          </div>
          <div className={classes.authorData}>
            <p>
              <b>{story.storyAuthor}</b>
            </p>
            <p>
              <b>Published: </b>
              {story.storyDate
                ? new Date(story.storyDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : ""}
            </p>
          </div>
        </div>
        <div className={classes.paragraph1}>
          <div className={classes.subTitle}>
            <h4>
              <b>{story.firstTitle}</b>
            </h4>
          </div>
          <div className={classes.parag0}>
            <p dangerouslySetInnerHTML={{
                        __html: story.firstStoryContent,
                      }}>
             
            </p>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        <img src={story.storySecondImage} alt="afghanMap" />
        <div className={classes.subTitle1}>
          <h4>
            <b>{story.secondTitle}</b>
          </h4>
        </div>
        <div className={classes.paragraphs}>
          <div className={classes.parag1}>
          <p dangerouslySetInnerHTML={{
                        __html: story.secondStoryContent,
                      }}>
             
            </p>
      
          </div>
        </div>

        <div className={classes.CommentSection}>
          <div className={classes.titleCommment}>
            <h2 className={classes.CommentHeader}>
              <span>Comments</span>
            </h2>
          </div>
          <div className={classes.allComments}>
            {listComment?.map((co) => (
              <div
                className={classes.commentInfo}
                style={{ marginBottom: "20px" }}
              >
                <div className={classes.person}>
                  <p>
                    <b>{co.commentOwner}:</b>
                  </p>
                </div>
                <div className={classes.commentContent}>
                  <p>{co.commentContent}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.formComment}>
            <form style={{ marginTop: "30px" }}>
              <div className={classes.commentInput}>
                <div className={classes.typeComment}>
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  style={{ border: "none", background: "transparent" }}
                  onClick={handleComment}
                >
                  <div className={classes.iconPush}>
                    <SendIcon sx={{ color: "#2563eb", fontSize: "40px" }} />
                  </div>
                  <ToastContainer
                    style={{
                      fontSize: "18px",
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;
