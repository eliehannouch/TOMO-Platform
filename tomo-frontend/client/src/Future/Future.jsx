import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Future.module.css";
import { ToastContainer, toast } from "react-toastify";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material/";
import "react-toastify/dist/ReactToastify.css";
import ShareIcon from "@mui/icons-material/Share";
 import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import president from "../assets/Woman.png"

const Future = () => {
  const { id } = useParams();
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
  const [future, setFuture] = useState();
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
        `https://tomo-backend-l18z.vercel.app/api/artifact/comment/${id}`,
        formData
      );
      notify();
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getArtifact = async () => {
      try {
        const { data } = await axios.get(
          `https://tomo-backend-l18z.vercel.app/api/artifact/${id}`
        );
        console.log(data.data);
        setFuture(data.data);
      } catch (error) {}
    };
    getArtifact();
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          `https://tomo-backend-l18z.vercel.app/api/artifact/comment/${id}`
        );
        console.log(data);
        setListComment(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
    window.scroll(0, 0);
  }, []);

  const likedFuture = async () => {
    if (like) {
      try {
        const { data } = await axios.patch(
          `https://tomo-backend-l18z.vercel.app/api/artifact/dslike/${id}`
        );
        setFuture(data.data);
        setLike(!like);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axios.patch(
          `https://tomo-backend-l18z.vercel.app/api/artifact/like/${id}`
        );
        setFuture(data.data);
        setLike(!like);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const shareableLink = async () => {
    try {
      const {data} = await axios.patch(
        `https://tomo-backend-l18z.vercel.app/api/artifact/link/${id}`
      );
      console.log(data.data)
      navigator.clipboard
        .writeText(data.data)
        .then(() => {
          toast.success('Copied')
        })
        .catch((error) => {
          console.error(`Error copying to clipboard: ${error}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.allPage}>
      <div className={classes.firstSection}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <h1>{future?.title}</h1>
          </div>
          <div className={classes.headerIcons}>
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
              }}
            >
              {future?.likes}
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
              sx={{ color: "blue", fontSize: "35px", cursor: "pointer" }}
              onClick={shareableLink}
            />
          </div>
        </div>
        
        {/* <img src={president} alt="afghan" /> */}
        <img src={future?.artifactImage} alt="afghan" /> 
        <div className={classes.attention}>
          <p>
            <b>Attention</b>: {future?.artifactAttention}
          </p>
        </div>
        <div className={classes.subTitle}>
          <h4>
            <b>{future?.intro}</b>
          </h4>
        </div>
        <div className={classes.paragraphs} style={{ marginTop: "10px" }}>
          <div className={classes.parag1}>
            <p dangerouslySetInnerHTML={{
                        __html: future?.artifactContent,
                      }}>
            </p>
            <p>
            <b>{future?.greeting}</b> <br />
            <b>{future?.ending}</b>
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
            {listComment?.map((list) => (
              <div
                className={classes.commentInfo}
                style={{ marginBottom: "20px" }}
              >
                <>
                  <div className={classes.person}>
                    <p>
                      <b>{list.commentOwner}:</b>
                    </p>
                  </div>
                  <div className={classes.commentContent}>
                    <p>{list.commentContent}</p>
                  </div>
                </>
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

export default Future;
