import React from "react";
import classes from "./card.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = ({
  title,
  description,
  image,
  type,
  footerFirst,
  footerSecond,
  footerThird,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{
          cursor: "grabbing",
          scale: 1,
          x: -10,
          y: -10,
          rotateX: 10,
          rotateY: 10,
          z: 200,
        }}
        initial={{
          rotateX: 180,
          rotateY: -180,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        animate={{
          rotateX: 0,
          rotateY: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="col-md-6 col-lg-4 px-4 px-md-3"
      >
        <div className={classes.card1}>
          <div className={classes.cardHeader}>
            <p>{title}</p>
          </div>
          <div className={classes.cardImage}>
            <img src={image} alt="afghan" className={classes.image} />
          </div>
          <div className={classes.cardBody}>
            <p>{description}</p>
          </div>
          {/* <div className={classes.listen}>
            <button className={classes.actionButton}>
              <span>Read </span>
              <ArrowForwardIosIcon sx={{ color: "red", fontSize: "18px" }} />
            </button>
          </div> */}
          <div className={classes.cardFooter}>
            <p>
              {footerFirst} "<a href="#">{footerSecond}</a>"
              <br />
              {footerThird}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
