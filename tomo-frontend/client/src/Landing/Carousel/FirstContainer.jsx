import React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";

import classes from "./first.module.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Autoplay]);

const content = [
  {
   image:s1,
   link:"/stories",
  },
  {
   image:s2,
   link:"/imaginary",
  },
  {
   image:s3,
   link:"/methodology",
  },
  {
   image:s4,
   link:"/joinUs",
  }, 
];

const FirstContainer = () => {
  return (
    <div className={classes.imageBackground}>
      <div className={classes.carousel}>
        <Swiper
          navigation={true}
          className={classes.swiper}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1000}
        >
          {content.map((c, i) => (
            <SwiperSlide key={i} className={classes.swiperSlide}>
              <Link to={c.link}>
                <div className={classes.box}>
                  <img src={c.image} alt={"carousel"} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FirstContainer;
