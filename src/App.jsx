import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./api/config";

export function App() {
  const [currentShow, setCurrentShow] = useState();

async function fetchPopular() {
  const popularShows = await TVShowAPI.fetchPopular();
  if (popularShows.length > 0 ) {
    setCurrentShow(popularShows[0]);
  }
}

  useEffect(() => {
    fetchPopular();
  }, []);


  console.log(currentShow);
  return (
    <div className={style.main_container}
    style={{ background: 
    currentShow ?
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${ BACKDROP_BASE_URL }${ currentShow.backdrop_path }")
    no-repeat center / cover`
  : 'black'
   }}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>SUBTITLE</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "50%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>SHOW DETAIL</div>
      <div className={style.recommend_tv_shows}>RECOMMENDED SHOWS</div>
    </div>
  );
}
