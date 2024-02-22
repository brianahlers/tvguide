import style from "./style.module.css";
export function App() {
  return (
    <div className={style.main_container}>
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
